# Comparison of Ensembl and NCBI GRCr8 Annotations

<hr color=orange >

### Hao Chen

#### University of Tennessee Health Science Center

Note: This presentation provides a comprehensive comparison between the Ensembl (v115) and NCBI (RefSeq) annotations for the GRCr8 rat reference genome. We will explore structural discrepancies, transcript complexity, and nomenclature conflicts.

---

## Compare gtf files from <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_036323735.1/" target=_new>NCBI</a> vs <a href="https://useast.ensembl.org/Rattus_norvegicus/Info/Index" target=_new>Ensembl v 115</a>

- Global feature counts
- Transcript Structure
- Gene Identity
- Nomenclature conflicts

---

## Feature Counts

### Column 3 o the GTF file

<pre> 
# Ensembl
1	ensembl	gene	268909413	269079661	.	-	.	gene_id "ENSRNOG00000009523"; gene_version "9"; gene_name "Rab11fip2"; gene_source "ensembl"; gene_biotype "protein_coding";
# NCBI
NC_086019.1	Gnomon	gene	43201	45926	.	-	.	gene_id "LOC134485287"; transcript_id ""; db_xref "GeneID:134485287"; description "zinc finger protein 431-like"; gbkey "Gene"; gene "LOC134485287"; gene_biotype "protein_coding"; partial "true"; 

</pre>
<table> <tr><td width=50%>
<img src="./images/rn8annot/z01_feature_counts_high.png" width=100%>
</td><td>
<img src="./images/rn8annot/z01_feature_counts_low.png" width=100%>
</td></tr></table>

Note:
exon = CDS + UTRs

---

## Gene Biotype Distribution: Major and Minor Categories

<table> <tr><td width=50%>
<img src="./images/rn8annot/z01_biotypes_high.png" width=100%>
</td><td>
<img src="./images/rn8annot/z01_biotypes_low.png" width=100%>
</td></tr></table>

Note:
protein coding: ORF translated into protein
pseudogene: there is premature stop codon or frame shift
processed pseudogene: created via retrotransposition of mRNA
non-processed pseudogene: created via gene duplication
transcribed pseudogene: transcribed but not functional
snRNA: small nuclear RNA: involved in splicing of introns
snoRNA: small nucleolor RNA: guide chemical modifications of RNAs
scaRNA: a subset of snoRNA
lncRNA: longer than 200 nt but are not translated
ncRNA:
miRNA: 19 to 25 nt, post-transcriptional regulation of gene expression
Y RNA: involved in the initiation of chromosomal DNA replication

---

## Gene Spans and Transcript Lengths

<table> <tr><td width=33%>
<img src="./images/rn8annot/z01_dist_gene_length.png" width=100%>
</td><td width=33%>
<img src="./images/rn8annot/z09_intron_length_per_gene.png" width=100%>
</td><td width=33%>
<img src="./images/rn8annot/z01_dist_transcript_length.png" width=100%>
</td></tr></table>

Note:
Ensembl has a longer median gene span (~10.9kb vs 6.5kb).
NCBI has significantly longer mature transcripts (Median: 2,802 bp vs Ensembl 1,778 bp).
The "Short Gene" paradox in NCBI is caused by its inclusion of thousands of very short ncRNAs and pseudogenes that pull the median down.

The Genes around 100 bp are miRNA, snoRNA, and snRNA, tRNA, 5S RNA and short pseudogenes
the shortest in NCBI are mature miRNA products (18 to 25 nt) (ensembl annotates pre-miRNA, about 80bp, NCBI includes both)

---

## Transcripts and Exons

<table> <tr><td width=33%>
<img src="./images/rn8annot/z01_dist_transcripts_per_gene.png" width=100%>
</td> <td width=33%>
<img src="./images/rn8annot/z01_dist_exons_per_transcript.png" width=100%>
</td> <td width=33%>
<img src="./images/rn8annot/z03_isoform_density.png" width=100%>
</td></tr></table>

---

## Exons by Biotype Classification

<img src="./images/rn8annot/z03_exon_inventory.png" width=60%>

---

## UTR Mapping Consistency and Generation Efficiency

<table> <tr><td width=50%>
<img src="./images/rn8annot/z03_utr_location_comparison.png" width=100%>
</td><td width=50%>
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

## Gene Count vs Gene Symbol Overlap

<table> <tr><td width=50%>
<img src="./images/rn8annot/z02_total_unique_loci.png" width=100%>
</td><td>
<img src="./images/rn8annot/z02_gene_symbol_overlap.png" width=100%>
</td></tr></table>

Note:

---

## Top Biotypes of Unique Gene Symbols

<img src="./images/rn8annot/z07_unique_symbol_biotypes.png" width=90%>

Note:

---

## Nomenclature Consistency

#### Genes linked by unique IDs in Ensembl BioMart (22k named genes)

<img src="./images/rn8annot/z05_nomenclature_comparison.png" width=70%>

Note:
Nomenclature agreement is high (95%) for shared, well-characterized genes.
The 25k unique NCBI symbols from earlier are largely excluded here because they lack cross-database ID links (mostly small RNAs).

---

## Consistency of Protein-Coding Models

<img src="./images/rn8annot/z02_cds_consistency_transcript.png" width=60%>

Note:
At the transcript level, only ~21k protein-coding models are identical.
NCBI provides nearly double the amount of unique protein isoforms (43k vs 24k), confirming higher transcriptomic resolution even at the protein level.

---

## Consistency of lncRNA Models

#### only 4 lncRNA genes have exact locations

<img src="./images/rn8annot/z02_lncrna_consistency_transcript.png" width=60%>

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

## Summary

| Feature                     | NCBI (RefSeq)   | Ensembl (v115) |
| :-------------------------- | :-------------- | :------------- |
| **Protein-Coding Genes**    | **23,154**      | 22,016         |
| **Isoform Density**         | **3.8** (mean)  | 2.0 (mean)     |
| **Transcripts per Gene**    | **3.02** (mean) | 2.20 (mean)    |
| **Orphan PC Genes**         | **1,250**       | 419            |
| **Unique UTR Locs**         | **129,096**     | 87,012         |
| **lncRNA Transcripts**      | 21,024          | **39,234**     |
| **Unique Non-Coding Exons** | 59,602          | **110,104**    |

---

## Which one to use?

- **For Protein-Coding Studies:** **NCBI RefSeq** is the superior choice. It provides 67% more mRNA transcripts and captures a much denser alternative splicing landscape for protein-coding genes.
- **For RNA Biology & lncRNA:** **Ensembl** is preferred. It identifies nearly double the number of lncRNA transcripts and maintains a much larger catalog of unique non-coding exon locations (~110k vs ~60k).
- **For Structural Completeness:** NCBI models generally feature longer UTRs and more complex internal splicing, whereas Ensembl often uses algorithmic placeholders for UTRs (e.g., exactly 1,001 bp).
