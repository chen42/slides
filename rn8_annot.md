# Comparison of Ensembl and NCBI GRCr8 Annotations

<hr color=orange >

### Hao Chen

#### University of Tennessee Health Science Center

Note: This presentation provides a comprehensive comparison between the Ensembl (v115) and NCBI (RefSeq) annotations for the GRCr8 rat reference genome. We will explore structural discrepancies, transcript complexity, and nomenclature conflicts.

---

## Analysis Workflow

- **Genomic Overview:** Global feature counts.
- **Gene Overview:** Biotypes, lengths, and splicing complexity.
- **Transcript Structure:** Exon inventory, UTR mapping, and length details.
- **Gene Identity:** Overlap of Symbols, IDs, and Protein models.
- **Nomenclature:** Detailed breakdown of naming conflicts.

Note: Our goal is to provide a definitive recommendation on which annotation set to prefer for different research objectives.

---

## Unique Feature Counts: High and Low Coverage

<table> <tr><td width=50%>
<img src="./images/rn8annot/z01_feature_counts_high.png" width=100%>
</td><td>
<img src="./images/rn8annot/z01_feature_counts_low.png" width=100%>
</td></tr></table>

Note:
Left: High-count features (Exons and CDS). Note that Ensembl has more unique exon locations (~369k vs ~344k).
Right: Low-count features. NCBI has a higher transcript count (~91k vs ~88k) and more unique UTR segments (~129k vs ~87k).
Key finding: The UTR discrepancy is large (42k extra in NCBI) because NCBI identifies many more alternative start/stop codons within the same physical exons.

---

## Gene Biotype Distribution: Major and Minor Categories

<table> <tr><td width=50%>
<img src="./images/rn8annot/z01_biotypes_high.png" width=100%>
</td><td>
<img src="./images/rn8annot/z01_biotypes_low.png" width=100%>
</td></tr></table>

Note:
Left: Major biotypes (>100 genes). Protein coding counts are similar (~23k).
Right: Minor biotypes (<=100 genes). NCBI identifies many more small features like tRNAs (771 vs 0 in Ensembl) and lncRNAs (~11k vs ~6k).
Ensembl has a surplus of processed_pseudogenes.

---

## Distribution of Gene Spans and Mature Transcript Lengths

<table> <tr><td width=50%>
<img src="./images/rn8annot/z01_dist_gene_length.png" width=100%>
</td><td>
<img src="./images/rn8annot/z01_dist_transcript_length.png" width=100%>
</td></tr></table>

Note:
Left: Ensembl has a longer median gene span (~10.9kb vs 6.5kb).
Right: NCBI has significantly longer mature transcripts (Median: 2,802 bp vs Ensembl 1,778 bp).
The "Short Gene" paradox in NCBI is caused by its inclusion of thousands of very short ncRNAs and pseudogenes that pull the median down.

---

## Intron Length Distribution for Shared Genes

<img src="./images/rn8annot/z09_intron_length_per_gene.png" width=60%>

Note:
Investigating why Ensembl genomic spans are longer despite shorter mature transcripts.
While medians are similar (~12kb), Ensembl has a much higher mean intron length (243kb vs 43kb).
This confirms that Ensembl is more aggressive in linking distal exons separated by massive intronic gaps into single gene models.

---

## Comparison of Splicing Complexity: Transcripts and Exons

<table> <tr><td width=50%>
<img src="./images/rn8annot/z01_dist_transcripts_per_gene.png" width=100%>
</td><td>
<img src="./images/rn8annot/z01_dist_exons_per_transcript.png" width=100%>
</td></tr></table>

Note:
Left: NCBI shows higher transcript-per-gene counts, reflecting denser isoform annotation (3.8 isoforms per unique exon location vs Ensembl 2.0).
Right: NCBI transcripts contain more exons on average (11.2 vs 7.7), confirming higher structural complexity.

---

## Unique Exon Inventory by Biotype Classification

<img src="./images/rn8annot/z03_exon_inventory.png" width=60%>

Note:
Deduplicated physical exon locations categorized by usage.
Ensembl's total surplus (~369k) is driven by **Non-Coding** gene features (Orange), which account for ~110k unique locations.
In the **Protein-Coding** category (Green), NCBI actually has more unique physical locations (~285k vs ~259k).

---

## UTR Mapping Consistency and Generation Efficiency

<table> <tr><td width=33%>
<img src="./images/rn8annot/z03_utr_location_comparison.png" width=100%>
</td><td width=33%>
<img src="./images/rn8annot/z03_isoform_density.png" width=100%>
</td><td width=33%>
<img src="./images/rn8annot/z03_utr_efficiency.png" width=100%>
</td></tr></table>

Note:
Left: Only 15% of 5' UTRs match exactly. Boundary consistency is extremely low for 3' UTRs.
Center: Isoform Density (mean transcripts per unique exon). NCBI shows nearly double the overlap (3.8 vs 2.0).
Right: NCBI is more "efficient," generating ~453 UTRs per 1,000 exons vs Ensembl's ~335.
Conclusion: NCBI captures much more structural diversity and alternative splicing boundaries.

---

## Distribution of 5' and 3' UTR Lengths

<img src="./images/rn8annot/z04_utr_length_dist.png" width=70%>

Note:
NCBI 5' UTRs are longer on average (~731 bp vs ~333 bp).
Ensembl 3' UTRs show an artificial spike at exactly 1,001 bp (3,356 transcripts) and 5' UTRs at 199 bp (5,920 transcripts).
These are algorithmic placeholders. NCBI models are more evidence-driven.

---

## Locus Count vs Gene Symbol Overlap

<table> <tr><td width=50%>
<img src="./images/rn8annot/z02_total_unique_loci.png" width=100%>
</td><td>
<img src="./images/rn8annot/z02_gene_symbol_overlap.png" width=100%>
</td></tr></table>

Note:
Left: Total annotated loci are similar (~43k vs ~47k).
Right: Shared Symbols are much lower (~22k).
Conclusion: The apparent 25k "Unique NCBI Symbols" is a naming artifact. It includes ~11k loci that are shared physically but left unnamed in Ensembl (blank names in GTF), plus ~14k loci that are truly unique to NCBI.

---

## Top Biotypes of Unique Gene Symbols

<img src="./images/rn8annot/z07_unique_symbol_biotypes.png" width=90%>

Note:
Biotypes for the ~25k unique NCBI symbols and ~700 Ensembl symbols.
NCBI's surplus is primarily tRNAs and lncRNAs. Many of these appear "unique" because Ensembl provides no symbol name for the locus, only a stable ID.

---

## Consistency of Protein-Coding Models

<img src="./images/rn8annot/z02_cds_consistency_transcript.png" width=60%>

Note:
At the transcript level, only ~21k protein-coding models are identical.
NCBI provides nearly double the amount of unique protein isoforms (43k vs 24k), confirming higher transcriptomic resolution even at the protein level.

---

## Characterization of Nomenclature Discrepancies

<img src="./images/rn8annot/z05_nomenclature_comparison.png" width=70%>

Note:
Conflict analysis for the 22k genes linkable via persistent IDs.
Nomenclature agreement is high (95%) for shared, well-characterized genes.
The 25k unique NCBI symbols from earlier are largely excluded here because they lack cross-database ID links (mostly small RNAs).

---

## Physical Genomic Overlap of Annotated Genes

<img src="./images/rn8annot/z06_gene_spatial_overlap.png" width=60%>

Note:
Reciprocal overlap analysis. ~75% of Ensembl and ~71% of NCBI genes share physical space.
NCBI has higher absolute shared counts (33.4k vs 32.5k), confirming "one-to-many" overlaps where NCBI annotates multiple smaller genes in space Ensembl defines as one.

---

## Evidence Support for Database-Unique Gene Loci

<img src="./images/rn8annot/z08_combined_unique_evidence.png" width=60%>

Note:
Nearly 50% of the ~14,000 NCBI-unique loci are supported by explicit experimental evidence (SRA, EST, or Protein data).
100% of Ensembl-unique loci (~10,700) are supported by Ensembl's curation criteria.
Both sources' unique catalogs are biologically grounded and high-confidence.

---

## Identification of Orphan Protein-Coding Genes

<img src="./images/rn8annot/z10_orphan_pc_genes.png" width=60%>

Note:
NCBI identifies 1,250 orphan protein-coding loci (no overlap with any Ensembl gene), while Ensembl identifies 419.
These represent the most significant discrepancies in the rat genome—disputed protein-coding loci.

---

## Final Recommendation: Use NCBI RefSeq

| Feature                  | NCBI (RefSeq)   | Ensembl (v115) |
| :----------------------- | :-------------- | :------------- |
| **Protein-Coding Genes** | **23,154**      | 22,016         |
| **Isoform Density**      | **3.8** (mean)  | 2.0 (mean)     |
| **Transcripts per Gene** | **3.02** (mean) | 2.20 (mean)    |
| **Unique UTR Locs**      | **129,096**     | 87,012         |
| **Orphan PC Genes**      | **1,250**       | 419            |

#### _Use Ensembl primarily for regulatory UTR extraction or clinical VEP pipelines._

Note: Based on all metrics—isoform depth, structural completeness, and gene catalog size—NCBI RefSeq provides a more biologically representative and comprehensive model of the rat transcriptome.
