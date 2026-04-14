"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

type Streak = {
  life: number;
  width: number;
  points: Point[];
};

function createStreak(x: number, y: number, dx: number, dy: number, intensity = 1): Streak {
  const angle = Math.atan2(dy || 1, dx || 1);
  const length = 18 + Math.random() * 22 * intensity;
  const bend = 6 + Math.random() * 10;

  return {
    life: 1,
    width: 1 + Math.random() * 1.6,
    points: [
      { x, y },
      {
        x: x - Math.cos(angle) * length * 0.35 + (Math.random() - 0.5) * bend,
        y: y - Math.sin(angle) * length * 0.35 + (Math.random() - 0.5) * bend,
      },
      {
        x: x - Math.cos(angle) * length * 0.72 + (Math.random() - 0.5) * bend * 1.5,
        y: y - Math.sin(angle) * length * 0.72 + (Math.random() - 0.5) * bend * 1.5,
      },
      {
        x: x - Math.cos(angle) * length + (Math.random() - 0.5) * bend,
        y: y - Math.sin(angle) * length + (Math.random() - 0.5) * bend,
      },
    ],
  };
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !finePointer) {
      return;
    }

    document.documentElement.classList.add("cursor-effects-enabled");

    const canvas = canvasRef.current;
    const cursor = cursorRef.current;

    if (!canvas || !cursor) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const streaks: Streak[] = [];
    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      visible: false,
      vx: 0,
      vy: 0,
    };

    let rafId = 0;
    let lastScrollY = window.scrollY;
    let lastMoveAt = 0;

    const setCanvasSize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      streaks.forEach((streak, index) => {
        streak.life -= 0.055;

        if (streak.life <= 0) {
          streaks.splice(index, 1);
          return;
        }

        context.beginPath();
        context.moveTo(streak.points[0].x, streak.points[0].y);

        for (let i = 1; i < streak.points.length; i += 1) {
          context.lineTo(streak.points[i].x, streak.points[i].y);
        }

        context.strokeStyle = `rgba(208, 214, 224, ${0.26 * streak.life})`;
        context.shadowColor = `rgba(255, 255, 255, ${0.16 * streak.life})`;
        context.shadowBlur = 10;
        context.lineWidth = streak.width * streak.life;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
      });

      pointer.x += (pointer.targetX - pointer.x) * 0.22;
      pointer.y += (pointer.targetY - pointer.y) * 0.22;

      cursor.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
      cursor.style.opacity = pointer.visible ? "1" : "0";

      rafId = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const dx = event.clientX - pointer.targetX;
      const dy = event.clientY - pointer.targetY;

      pointer.vx = dx;
      pointer.vy = dy;
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      pointer.visible = true;

      if (now - lastMoveAt > 12) {
        streaks.push(createStreak(event.clientX, event.clientY, dx, dy));
        lastMoveAt = now;
      }

      if (streaks.length > 18) {
        streaks.splice(0, streaks.length - 18);
      }
    };

    const handlePointerLeave = () => {
      pointer.visible = false;
    };

    const handleScroll = () => {
      const delta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      if (!pointer.visible || Math.abs(delta) < 2) {
        return;
      }

      streaks.push(createStreak(pointer.targetX, pointer.targetY, pointer.vx, delta * 1.8, 0.9));

      if (streaks.length > 18) {
        streaks.splice(0, streaks.length - 18);
      }
    };

    setCanvasSize();
    draw();

    window.addEventListener("resize", setCanvasSize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.documentElement.classList.remove("cursor-effects-enabled");
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1200] hidden md:block"
      />
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[1201] hidden h-8 w-8 overflow-hidden rounded-full border border-black/10 bg-black opacity-0 shadow-[0_8px_24px_rgba(15,23,42,0.18)] transition-opacity duration-150 md:block"
      >
        <img
          src="/logo/logo-white-black.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </>
  );
}
