import t from "@/content/docs.json";
import screenOverview from "@/assets/screen-overview.png";
import { HtmlContent } from "@/components/ui/content/HtmlContent";
import workflowTable from "@/assets/workflow-table.png";
import counterfactualsScreen from "@/assets/counterfactuals-screen.png";
import modelAnalysis from "@/assets/model-analysis.png";
import instanceView from "@/assets/instance-view.png";
import featureExplainability from "@/assets/feature-explainability.png";
import paramExplainability from "@/assets/param-explainability.png";
import globalExplainability from "@/assets/global-explainability.png";
import globalCounterfactuals from "@/assets/global-counterfactuals.png";
import screenComparative from "@/assets/screen-comparative.png";
import screenArtifact from "@/assets/screen-artifact.png";
import screenGlobalExplainability from "@/assets/global-explainability.png";
import agentsOverviewUsage from "@/assets/agents-overview-usage.png";
import agentsSessions from "@/assets/agents-sessions.png";
import agentsTraceReplay from "@/assets/agents-trace-replay.png";
import agentsCompareVerdicts from "@/assets/agents-compare-verdicts.png";
import agentsScan from "@/assets/agents-scan.png";
import compareData from "@/assets/compare-data.png"; // import your new image

// import your new image

type SubBlockData = {
  title: string;
  content?: string;
  image?: string;
  imageAlt?: string;
};

function SubBlock({
  title,
  content,
  image,
  imageAlt,
}: SubBlockData) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>

      <HtmlContent html={content || t.subBlockPlaceholder} />

      {image && (
        <img
          src={IMAGES[image]}
          alt={imageAlt || title}
          className="mt-4 rounded-lg border border-slate-200 shadow-sm"
        />
      )}
    </div>
  );
}

const IMAGES: Record<string, string> = {
  screenOverview,
  workflowTable,
  counterfactualsScreen,
  modelAnalysis,
  instanceView,
  featureExplainability,
  paramExplainability,
  globalExplainability,
  globalCounterfactuals,
  screenComparative,
  screenArtifact,
  screenGlobalExplainability,
  agentsOverviewUsage,
  agentsSessions,
  agentsTraceReplay,
  agentsCompareVerdicts,
  agentsScan,
  compareData,
};

export function DocSection({
  id,
  eyebrow,
  title,
  description,
  image,
  subBlocks,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  subBlocks?: SubBlockData[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      <p
        className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {image && (
        <img
          src={IMAGES[image]}
          alt={title}
          className="mt-6 rounded-lg border border-slate-200 shadow-sm"
        />
      )}

      {subBlocks && subBlocks.length > 0 ? (
        <div className="mt-6 space-y-4">
          {subBlocks.map((subBlock) => (
            <SubBlock
              key={subBlock.title}
              title={subBlock.title}
              content={subBlock.content}
              image={subBlock.image}
              imageAlt={subBlock.imageAlt}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}