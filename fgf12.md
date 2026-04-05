## snRNA-seq of NAc

<img src="images/fgf12/snRNAseq_Umap_msn.png" width=70%>

---

## snRNA-seq of NAc

<img src="images/fgf12/snRNAseq_violion.png" width=70%>

---

## snRNA-seq of NAc

<img src="images/fgf12/snRNAseq_correlation.png" width=70%>

---

## Using Bayesian Networks to Infer Causal Architecture

- The Bayesian Network Webserver
  - Identifies **directed, causal relationships** in multi-omic and behavioral datasets.
- Step 1: Local Scoring:
  - For every potential parent-child pair, calculates a local score based on the conditional probability P(B|A).
  - Uses Conditional Gaussian Distributions to allow discrete variables (e.g., Genotypes) to be the parents of continuous traits (e.g., Gene Expression).
- Step 2: Global Optimization:
  - Assembles these local "parent-child" blocks into the single most probable global map of the entire system.
- Integrates prior knowledge by enforcing biological flow
  - e.g., QTLs -> Transcripts -> Phenotypes.

---

## Bayesian Network Webserver

<img src="./images/fgf12/fgf12_oprm1_morphine_locomotion_bayesian_network_settings.png" width=70%>

---

## Bayesian Network Analysis for Causality

<img src="images/fgf12/BNW_network_inkscape_fixed.png" width=70%>

---

## Signals in Human Genetics Studies

<a href="https://www.ebi.ac.uk/gwas/genes/OPRM1">
<img src="./images/fgf12/oprm1_fgf12_gwas.png" width=70%>
</a>

---

## Naloxone responses

<img src="images/fgf12/fig6_naloxone.png" width=70%>

---

## Many other loci

<img src="images/fgf12/list_of_loci.png" width=70%>

---

## GeneCup Literature Mining

<img src="images/fgf12/genecup_graph.svg" width=60%>

---

## Structured LLM Literature Summary

Scientific Evaluation of MAP3K5 as a Causal Gene for Morphine-Induced Locomotion in Mice.

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

Based on the provided information, MAP3K5 is a plausible candidate gene. It possesses the necessary regional expression and general signaling machinery to influence behavioral traits. However, it cannot be classified as a "strong" candidate without specific functional validation (e.g., knockout or knockdown studies) directly targeting morphine-induced locomotor phenotypes in mice.

---

## Assisted Manual Validation of Citations

<img src="images/fgf12/sourcery.png" width=70%>

---

## Summary

---

## Acknowledgment

#### Paige M Lemen, Yanning Zuo, Alexander S Hatoum, Price E Dickson, Guy Mittleman, Arpana Agrawal, Benjamin C Reiner, Wade Berrettini, David G Ashbrook, Mustafa Hakan Gunturkun, Xusheng Wang, Megan K Mulligan, Caleb J Browne, Eric J Nestler, Francesca Telese
