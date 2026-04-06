## snRNA-seq of NAc

<img src="images/fgf12/snRNAseq_Umap_msn.png" width=70%>

<div style="text-align: left;">
  <hr style="border: 0; height: 2px; background-color: orange; width: 20%; margin-left: 0;">
  <span id="cite" style="display: block;"> Y Zuo and F Telese, UCSD </span>
</div>

---

## Cell-type Specific Expression of Oprm1 and Fgf12 in NAc

<img src="images/fgf12/snRNAseq_violion.png" width=70%>

<div style="text-align: left;">
  <hr style="border: 0; height: 2px; background-color: orange; width: 20%; margin-left: 0;">
  <span id="cite" style="display: block;"> Y Zuo and F Telese, UCSD </span>
</div>

---

## Cell-type Specific Correlation Between Oprm1 and Fgf12

<img src="images/fgf12/snRNAseq_correlation.png" width=70%>

<div style="text-align: left;">
  <hr style="border: 0; height: 2px; background-color: orange; width: 20%; margin-left: 0;">
  <span id="cite" style="display: block;"> Y Zuo and F Telese, UCSD </span>
</div>

---

## Using Bayesian Networks to Infer Causal Architecture

<font size =-1>

- The Bayesian Network Webserver
  - Identifies **directed, causal relationships** in genetic, multi-omic and behavioral datasets
- Step 1: Local Scoring:
  - For every potential parent-child pair, calculates a local score based on the conditional probability P(B|A)
  - Uses Conditional Gaussian Distributions to allow discrete variables (e.g., Genotypes) to be the parents of continuous traits (e.g., Gene Expression)
- Step 2: Global Optimization:
  - Assembles these local "parent-child" blocks into the single most probable global map of the entire system
- Integrates prior knowledge by enforcing biological flow
  - e.g., Genotype -> Transcripts -> Phenotypes

</font>

---

## Bayesian Network Webserver

<img src="./images/fgf12/fgf12_oprm1_morphine_locomotion_bayesian_network_settings.png" width=60%>

<div style="text-align: left;">
  <hr style="border: 0; height: 2px; background-color: orange; width: 20%; margin-left: 0;">
  <span id="cite" style="display: block;"> Y Cui, et al., UTHSC </span>
</div>

---

## Bayesian Network Analysis for Causality

<img src="images/fgf12/BNW_network_inkscape_fixed.png" width=70%>

---

## OPRM1 and FGF12 in Human Genetics Studies

<a href="https://www.ebi.ac.uk/gwas/genes/OPRM1">
<img src="./images/fgf12/oprm1_fgf12_gwas.png" width=70%>
</a>

---

## Enrichment of OPRM1 and FGF12 Associated Genenework

<font size=-2>

- Generating correlation networks
  - Obtain top 500 genes correlated to ORPM1 or FGF12 from GTEx v8 from 8 related tissues
  - Find genes shared between OPRM1 and FGF12 within each tissue
  - Find genes shared between more than 3 tissues.
  - Use MAGMA to conduct enrichment analysis.

</font>

| VARIABLE              | NGENES | BETA    | BETA_STD | SE    | P     |
| --------------------- | ------ | ------- | -------- | ----- | ----- |
| OUD                   |        |         |          |       |       |
| Network               | 68     | 0.00197 | 0.00012  | 0.113 | 0.493 |
| Addiction Risk Factor |        |         |          |       |       |
| Network               | 68     | 0.21938 | 0.01348  | 0.124 | 0.039 |

<div style="text-align: left;">
  <hr style="border: 0; height: 2px; background-color: orange; width: 20%; margin-left: 0;">
  <span id="cite" style="display: block;">A Hatoum, Wash U</span>
</div>

---

## Naloxone Responses

<img src="images/fgf12/fig6_naloxone.png" width=60%>

---

## Many More Loci!

<img src="images/fgf12/list_of_loci.png" width=70%>

---

## GeneCup Literature Mining

<a href="https://genecup2.genenetwork.org/cytoscape/?rnd=tmpvWtwVP&genequery=Adora1_Rgs7_Sema3d_Epha5_Slc6a1_Tenm4_Oprm1_Ywhaq_Ppm1a_Rps6ka5_Slc7a7_Slc7a8" target=_new>

<img src="images/fgf12/genecup_graph.svg" width=60%>
    </a>

<div style="text-align: left;">
  <hr style="border: 0; height: 2px; background-color: orange; width: 20%; margin-left: 0;">
  <span id="cite" style="display: block;"> P Prins, et al., UTHSC </span>
</div>

---

## Structured LLM Literature Summary

Evaluation of
<a href="https://genecup2.genenetwork.org/synonyms?node=Rgs7&rnd=" target=_new> Rgs7 </a> as a Causal Gene for Morphine-Induced Locomotion in Mice.

<font size=-1>

- A. Term Disambiguation
- B. Synthesis of Function and Experimental Context
- C. Critical Evaluation of Causal Gene Plausibility
  - 1. Assessment of Functional Plausibility
  - 2. Assessment of Tissue/Cell Type Relevance
  - 3. Assessment of Pathway and Network Involvement
  - 4. Assessment of Existing Disease/Trait Associations
- D. Balanced Concluding Assessment
  - Supporting Evidence:
  - Limitations and Gaps:
  - Final Judgment:
- Results
  - <a href="https://gemini.google.com/share/55a1a9faa9d5" target=_new> Gemini </a>
  - <a href="https://claude.ai/share/6fe1fa08-3c21-4fc0-b736-70b44fa2318b" target=_new> Claude </a>

</font>

---

## Assisted Manual Validation of Citations

<a href=" https://chen42.github.io/SourceCery/ " target=\_new >
<img src="images/fgf12/sourcery.png" width=70%>
</a>

---

## Summary

<font size =-4>

- Morphine-induced locomotion is governed by a dynamic timeline where _Oprm1_ (Chr 10) dominates the early phase, while the novel _Fgf12_ (Chr 16) locus controls the late phase.

- A significant but transient gene-gene interaction between _Oprm1_ and _Fgf12_ occurs specifically between 45–90 minutes post-injection, representing a rare demonstration of time-dependent epistasis in mammals.

- Single-nucleus RNA sequencing identified the D1-MSN-3 neuronal subtype in the Nucleus Accumbens as the likely site of this interaction, where both genes are co-expressed and positively correlated.

- Bayesian modeling suggests the interaction is mediated through a MAP kinase network, specifically identifying Map3k11 as a potential molecular bridge between opioid receptor signaling and Fgf12.

- Human GWAS data corroborates the importance of the _FGF12_ locus in substance use disorders, suggesting _Fgf12_ and its interaction with sodium channels as a novel therapeutic target for OUD.

- This work highlights how FAIR data reanalysis and the merging of human and animal neurogenomic data can facilitate bidirectional translational validation to uncover novel disease variants and molecular networks.

</font>

---

## Acknowledgment

<font size =-3>

## Paige M Lemen, Yanning Zuo, Alexander S Hatoum, Price E Dickson, Guy Mittleman, Arpana Agrawal, Benjamin C Reiner, Wade Berrettini, David G Ashbrook, Mustafa Hakan Gunturkun, Xusheng Wang, Megan K Mulligan, Caleb J Browne, Eric J Nestler, Francesca Telese

### University of Tennessee Health Science Center, Memphis; University of California San Diego, San Diego; Washington University in St. Louis, St Louis; Marshall University, Huntington; Ball State University, Muncie; University of Pennsylvania, Philadelphia; Nash Family Department of Neuroscience and Friedman Brain Institute, Icahn School of Medicine at Mount Sinai, New York

</font>

---

## Proteomic Data

<img src="./images/fgf12/protein_fgf12_oprm1.png" width=60%>

<div style="text-align: left;">
  <hr style="border: 0; height: 2px; background-color: orange; width: 20%; margin-left: 0;">
  <span id="cite" style="display: block;"> X Wang, UTHSC </span>
</div>

---
