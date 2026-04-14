import {
  collaboratorBio,
  founderBio,
  founderName,
  teamIntro,
  technicalLeadBio,
} from "@/lib/site";

import { CollaboratorCard } from "./collaborator-card";
import { FounderFeature } from "./founder-feature";
import { SectionIntro } from "./section-intro";

export function TeamSection() {
  return (
    <section className="section-frame">
      <SectionIntro eyebrow="Team" title="People building the intelligence layer" body={teamIntro} />

      <div className="mt-10 space-y-5">
        <FounderFeature role="Founder & CEO" name={founderName} bio={founderBio} />

        <div className="grid gap-5 lg:grid-cols-2">
          <CollaboratorCard role="Technical Lead" name="Yongkang Zou" bio={technicalLeadBio} />
          <CollaboratorCard role="Battery / AI collaborator" name="Bruno Andreis" bio={collaboratorBio} />
        </div>
      </div>
    </section>
  );
}
