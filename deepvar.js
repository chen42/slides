(function () {
'strict'
var markdownContent = ''
+ "\n"
+ "## GGI 901 Integrative Genetics \n"
+ "\n"
+ "\n"
+ "<a href=\"https://www.nature.com/articles/nbt.4235\" target=_new> <img src=\"./images/deepvar/cover.png\" width=60%></a>\n"
+ "\n"
+ "<hr style=\"color:royalblue\">\n"
+ "\n"
+ " **Hao Chen**, hchen@uthsc.edu, Department of Pharmacology, UTHSC\n"
+ "\n"
+ "https://chen42.github.io/slides/deepvar.html\n"
+ "\n"
+ "<small> Written using [Reveal.js](https://github.com/hakimel/reveal.js) and [markdown](https://help.github.com/categories/writing-on-github/) </small>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "### Outline\n"
+ "\n"
+ "#### How to find genetic variations between individuals?\n"
+ "\n"
+ "* NextGen sequencing\n"
+ " * Platforms\n"
+ " * GATK: calling SNP and Indel from NextGen data\n"
+ "* Deep Learning\n"
+ " * <u>C</u>onvolutional <u>N</u>eural <u>N</u>et (CNN)\n"
+ " * Google Inception network\n"
+ "* DeepVariant: Applying CNN (Inception) to NextGen Seq data \n"
+ " * Design\n"
+ " * Training\n"
+ " * Software\n"
+ " * Validation\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## DNA sequencing\n"
+ "\n"
+ "### Sanger sequencing \n"
+ "\n"
+ "<img src=\"https://ka-perseus-images.s3.amazonaws.com/d56c026870bbfee4658a9eaa52daba496d4a58ad.png\" width=50%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## NextGen sequencing\n"
+ "### SOLiD\n"
+ "\n"
+ "<a href=\"http://seqanswers.com/forums/showthread.php?t=10\">\n"
+ "<img src=\"http://seqanswers.com/forums/images/content/abi-fig4.jpg\" width=40%>\n"
+ "</a>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## NextGen sequencing\n"
+ "### Illumina \n"
+ "\n"
+ "\n"
+ "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Cluster_Generation.png/660px-Cluster_Generation.png\">\n"
+ "\n"
+ "[YouTube by Rob Edwards](https://www.youtube.com/watch?v=WneZp3fSJIk) explaining the method (not perfect but easy to understand)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## NextGen sequencing\n"
+ "### Oxford Nanopore \n"
+ "\n"
+ "<div id=\"left50\">\n"
+ "\n"
+ "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qzusVw4Dp8w?start=19\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n"
+ "</div>\n"
+ "<div id=\"right50\">\n"
+ "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/202001_nanopore_sequencing.svg/1920px-202001_nanopore_sequencing.svg.png\" width=100%>\n"
+ "</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "\n"
+ "## NextGen sequencing\n"
+ "### PacBio \n"
+ "\n"
+ "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/_lD8JyAbwEo?start=21\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "\n"
+ "### NextGen Seq data files \n"
+ "\n"
+ "fasta\n"
+ "\n"
+ "\n"
+ "```\n"
+ ">cluster_2:UMI_ATTCCG # record name; starts with '>'\n"
+ "TTTCCGGGGCACATAATCTTCAGCCGGGCGC # DNA sequence\n"
+ "\n"
+ "```\n"
+ "\n"
+ "fastq\n"
+ "\n"
+ "```\n"
+ "@cluster_2:UMI_ATTCCG # record name; starts with '@'\n"
+ "TTTCCGGGGCACATAATCTTCAGCCGGGCGC # DNA sequence\n"
+ "+ # empty line; starts with '+'\n"
+ "9C;=;=<9@4868>9:67AA<9>65<=>591 # phred-scaled quality scores\n"
+ "``` \n"
+ "\n"
+ "csfasta (SOLiD)\n"
+ "\n"
+ "```\n"
+ ">2_14_26_F3\n"
+ "T110021221100310030120022032222111321022112223\n"
+ "```\n"
+ "---\n"
+ "\n"
+ "## GATK: the standard for variant analysis\n"
+ "\n"
+ "<a href=\"https://software.broadinstitute.org/gatk/best-practices/workflow?id=11145\" target=_new> \n"
+ "<img src=\"https://us.v-cdn.net/5019796/uploads/editor/mz/tzm69d8e2spl.png\" width=70%></a>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Challenges of variant discovery \n"
+ " from NextGen sequencing data\n"
+ "\n"
+ "* Sequencing data contains errors (0.1-10%)\n"
+ "* Error has many sources\n"
+ "* Error is depend on technology used\n"
+ "\n"
+ "<img src=\"./images/deepvar/wmiwli_illumina_ion.png\" width=70%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## GATK statistical models\n"
+ "\n"
+ "* logistic regression for base errors\n"
+ "* hidden Markov for read likelihood given the haplotypes\n"
+ "* naive Bayes classifier for variant calling\n"
+ "* Gaussian mixture model with hand-crafted feature to remove common false positive \n"
+ "* optimized for the Illumina platform\n"
+ "* assumes errors are independent\n"
+ "\n"
+ "* <font color=\"darkorange\">Can we use one single learning model to achieve better performance? </font>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Neural Network\n"
+ "### one node at a time\n"
+ "\n"
+ "<img src=\"https://cdn-images-1.medium.com/max/1600/1*v88ySSMr7JLaIBjwr4chTw.jpeg\" width=70%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Deep Neural Network\n"
+ "### Fully connected\n"
+ "\n"
+ "<img src=\"https://www.oreilly.com/library/view/tensorflow-for-deep/9781491980446/assets/tfdl_0401.png\" width=50%>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Deep Neural network\n"
+ "### Loss Function\n"
+ "\n"
+ "<table><tr><td>\n"
+ "<img src=\"https://cdn-images-1.medium.com/max/1040/1*mlXnpXGdhMefPybSQtRmDA.png\">\n"
+ "</td><td>\n"
+ "\n"
+ "\n"
+ "<a href=\"https://heartbeat.fritz.ai/5-regression-loss-functions-all-machine-learners-should-know-4fb140e9d4b0\"> <img src=\"https://cdn-images-1.medium.com/max/1040/1*EqTaoCB1NmJnsRYEezSACA.png\">\n"
+ "</a>\n"
+ "</td></tr></table>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Linear regresssion by iterative updates [R code](https://www.r-bloggers.com/linear-regression-by-gradient-descent/)\n"
+ "\n"
+ "\n"
+ "\n"
+ "<img src=\"./images/deep_learning/gradient_descent_for_linear_regression.gif\"  width=60%>\n"
+ "\n"
+ "\n"
+ "```\n"
+ "## theta is the parameter, alpha is learning rate\n"
+ "for (i in 1:num_iters) {\n"
+ " error <- (X %*% theta - y)\n"
+ " delta <- t(X) %*% error / length(y)\n"
+ " theta <- theta - alpha * delta\n"
+ "}\n"
+ "\n"
+ "```\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Deep Neural network\n"
+ "### gradient descent, learning rate\n"
+ "\n"
+ "<table><tr><td width=50%>\n"
+ "\n"
+ "<img src=\"https://www.jeremyjordan.me/content/images/2018/02/Screen-Shot-2018-02-24-at-11.47.09-AM.png\"><br>\n"
+ "\n"
+ "<img src=\"http://home.agh.edu.pl/~horzyk/lectures/ai/GradientDescentOfErrorFunction.jpg\">\n"
+ "</td><td width=50%>\n"
+ "\n"
+ "<img src=\"https://blog.paperspace.com/content/images/2018/05/challenges-1.png\">\n"
+ "</td></tr></table>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Deep Neural network\n"
+ "\n"
+ "### Training the network\n"
+ "\n"
+ "<a href=\"https://theclevermachine.wordpress.com/tag/backpropagation/\">\n"
+ "<img src=\"./images/deepvar/fprop_bprop5.png\" width=70%>\n"
+ "\n"
+ "</a>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "## Live demo of DNN\n"
+ "\n"
+ "<a href=\"https://lecture-demo.ira.uka.de/neural-network-demo/?preset=Three%20classes%20test\" target=_new ><img src=\"./images/deepvar/neuralnet.png\"></a>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "\n"
+ "## Convolution\n"
+ "\n"
+ "![](https://ujwlkarn.files.wordpress.com/2016/07/screen-shot-2016-07-24-at-11-25-13-pm.png?w=150&h=136)\n"
+ "![](https://ujwlkarn.files.wordpress.com/2016/07/screen-shot-2016-07-24-at-11-25-24-pm.png?w=74&h=64) \n"
+ "![](https://ujwlkarn.files.wordpress.com/2016/07/convolution_schematic.gif?w=268&h=196&zoom=2)\n"
+ "\n"
+ "https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Convolution as feature detector\n"
+ "\n"
+ "![](https://ujwlkarn.files.wordpress.com/2016/08/screen-shot-2016-08-05-at-11-03-00-pm.png?w=342&h=562)\n"
+ "\n"
+ "https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Deep Neural network\n"
+ "\n"
+ "### ConvNet, CNN\n"
+ "\n"
+ "![](https://www.mathworks.com/content/mathworks/www/en/discovery/convolutional-neural-network/jcr:content/mainParsys/image_copy.adapt.full.high.jpg/1523891796216.jpg)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Visual example of a ConvNet\n"
+ "\n"
+ "<a href=\"http://scs.ryerson.ca/~aharley/vis/conv/\"><img src=\"https://ujwlkarn.files.wordpress.com/2016/08/conv_all.png?w=1024\"></a>\n"
+ "\n"
+ "\n"
+ "Author: [Adam Harley](http://www.cs.cmu.edu/~aharley/)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Google InceptionNet\n"
+ "\n"
+ "<img src=\"./images/deepvar/inceptionv1.png\" width=80%>\n"
+ "\n"
+ "[InceptionNet](https://towardsdatascience.com/a-simple-guide-to-the-versions-of-the-inception-network-7fc52b863202)\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "\n"
+ "## DeepVariant \n"
+ "\n"
+ "sources of info\n"
+ "\n"
+ "* Dec 14 2016 [BioRxiv](https://www.biorxiv.org/content/early/2016/12/14/092890)\n"
+ "* Dec 04 2017 [Google Blog](https://ai.googleblog.com/2017/12/deepvariant-highly-accurate-genomes.html)\n"
+ "* Sep 24 2018 [Nature Biotechnology](https://www.nature.com/articles/nbt.4235)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## DeepVariant\n"
+ "\n"
+ "### workflow\n"
+ "\n"
+ "<img src=\"./images/deepvar/deepvar_workflow.png\" width=80%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## DeepVariant\n"
+ "\n"
+ "### converting sequences to image\n"
+ "\n"
+ "1.  local realign (GATK)   \n"
+ "1.  find candidate variants  \n"
+ "1.  construct one RGB image for each candidate  \n"
+ "    * each pixel represents one base position\n"
+ "    * image size can be  221 pixel (w) x 100 pixel (h)\n"
+ "        * for each SNP, consider 110 bases on each side\n"
+ "        * max 95 reads per images (first 5 rows reserved for the reference)\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## RGB images\n"
+ "\n"
+ "<img src=\"https://upload.wikimedia.org/wikipedia/commons/5/56/RGB_channels_separation.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## DeepVariant\n"
+ "\n"
+ "### coding read info in the image\n"
+ "\n"
+ "```\n"
+ "def get_base_color(base):\n"
+ " base_to_color = {'A': 250, 'G': 180, 'T': 100, 'C': 30}\n"
+ " return base_to_color.get(base, 0)\n"
+ "\n"
+ "def get_quality_color(quality):\n"
+ " return int(254.0 * (min(40, quality) / 40.0))\n"
+ "\n"
+ "def get_strand_color(on_positive_strand):\n"
+ " return 70 if on_positive_strand else 240\n"
+ "\n"
+ "def get_base_alpha(read_base, ref_base, read, call):\n"
+ " alpha1 = 1.0 if read_supports_alt_allele(read, call.alt_allele) else 0.6\n"
+ " alpha2 = 0.2 if read_base == ref_base else 1.0\n"
+ " return alpha1 * alpha2\n"
+ "\n"
+ "def make_pixel(red, green, blue, alpha):\n"
+ " return RGB(int(alpha * red), int(alpha * green), int(alpha * blue))\n"
+ "```\n"
+ "\n"
+ "---\n"
+ "## DeepVariant\n"
+ "\n"
+ "### Visualizing examples \n"
+ "\n"
+ "* GitHub: online repository for code, with version control\n"
+ "* Python: programming language\n"
+ "* ipython notebook: an environment to run python code section by section\n"
+ "* Google colab: a cloud version of the ipython notebook\n"
+ "\n"
+ "[example](https://github.com/chen42/deepvariant)\n"
+ "\n"
+ "[deeper dive](https://blog.dnanexus.com/2019-02-19-deep-dive-into-deepvariant/)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## DeepVariant\n"
+ "\n"
+ "### Training \n"
+ "\n"
+ "* Using the Inception model with pre-trained weights\n"
+ "* Last layer is a three class (hom-ref, het, hom-alt) softmax \n"
+ "\n"
+ "<a href=https://medium.com/data-science-bootcamp/understand-the-softmax-function-in-minutes-f3a59641e86d>  <img src=\"https://cdn-images-1.medium.com/max/1600/1*670CdxchunD-yAuUWdI7Bw.png\" width=50%></a>\n"
+ "\n"
+ "\n"
+ "* [DistBelief framework](https://research.google.com/pubs/pub40565.html?hl=no):  a method to use many CPUs cores, useful when RAM requirement is larger than what the GPU offer (e.g. 6GB), although current GPUs have much larger memory (e.g. GTX 1080 ti has 11GB)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## DeepVariant\n"
+ "###  results \n"
+ "\n"
+ "<img src=\"./images/deepvar/deepvar_eval.png\" width=100%>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## DeepVariant\n"
+ "\n"
+ "### Sequencing Platforms\n"
+ "\n"
+ "|Data| Caller| Sensitivity |PPV| F1|\n"
+ "|---|---|---|---|---|\n"
+ "|Ion  AmpliSeq  exome | DeepVariant | 94.12% | 99.79% | 96.87%|\n"
+ "| | TVC | 96.47% | 98.11% | 97.28%|\n"
+ "|| GATK | 93.24% | 19.15% | 31.78%|\n"
+ "|Illumina  TruSeq  exome | DeepVariant | 93.01% | 99.39% | 96.09%|\n"
+ "| | Ensemble | 92.92% | 98.08% | 95.43%|\n"
+ "| |GATK | 91.02% | 99.30% | 94.98%|\n"
+ "|10X  Chromium  75x  WGS | DeepVariant | 98.73% | 99.91% | 99.32%|\n"
+ "| |Long-ranger | 98.13% | 98.26% | 98.19%|\n"
+ "|| GATK | 99.08% | 94.62% | 96.80%|\n"
+ "|PacBio  raw  reads  40x  WGS | DeepVariant | 88.51% | 97.25% | 92.67%|\n"
+ "|| samtools | 89.34% | 40.89% | 56.10%|\n"
+ "| SOLID  85x | DeepVariant | 76.62% | 99.01% | 86.39%|\n"
+ "| | GATK | 73.91% | 84.26% | 78.75%|\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## DeepVariant\n"
+ "\n"
+ "### recall vs precision \n"
+ "\n"
+ "<img src=\"./images/deepvar/deepvar_recall_prec.png\" width=30%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## DeepVariant\n"
+ "\n"
+ "### Genotype quality \n"
+ "\n"
+ "<img src=\"./images/deepvar/deepvar_genotype_qual.png\" width=70%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Notable features/improvements of DeepVariant\n"
+ "\n"
+ "* Cross species\n"
+ "	* Models trained using human reads and ground-truth data achieved high accuracy when applied to a mouse dataset (F1 = 98.29%), outperforming training on the mouse data itself (F1 = 97.84%)\n"
+ "* But species-specific model still helps? \n"
+ "	* [mosquito genome](https://google.github.io/deepvariant/posts/2018-12-05-improved-non-human-variant-calling-using-species-specific-deepvariant-models/)\n"
+ "* Better quality calls at lower coverage \n"
+ "	* [Twenty is the new thirty](https://google.github.io/deepvariant/posts/2019-09-10-twenty-is-the-new-thirty-comparing-current-and-historical-wgs-accuracy-across-coverage/)\n"
+ "* Recent Releases  \n"
+ "	* Introduce best practices for merging DeepVariant samples to generate gvcf files (v 0.9.0). \n"
+ "	* Improved Indel accuracy for WGS (v 0.9.0)\n"
+ "	* Improved accuracy for NovaSeq  (v 0.8.0)\n"
+ "	* Improved accuracy for PacBio  (v 0.9.0)\n"
+ "	* Improved PacBio HiFi model  (v 0.10.0)\n"
+ "	* v 1.0.0: Compared to DeepVariant v0.10, these changes reduce Illumina WGS errors by 24%, exome errors by 19%, and PacBio errors by 52%.\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Deepvariant Visual report\n"
+ "\n"
+ "\n"
+ "<img src=\"./images/ratGenome/dv_visual_BN-Lx_Cub.png\" width=70% >\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Run deepvariant\n"
+ "\n"
+ "```\n"
+ "BIN_VERSION=\"1.0.0\"\n"
+ "docker run \\\n"
+ "  -v \"YOUR_INPUT_DIR\":\"/input\" \\\n"
+ "  -v \"YOUR_OUTPUT_DIR:/output\" \\\n"
+ "  google/deepvariant:\"${BIN_VERSION}\" \\\n"
+ "  /opt/deepvariant/bin/run_deepvariant \\\n"
+ "  --model_type=WGS \\ **Replace this string with exactly one of the following [WGS,WES,PACBIO,HYBRID_PACBIO_ILLUMINA]**\n"
+ "  --ref=/input/YOUR_REF \\\n"
+ "  --reads=/input/YOUR_BAM \\\n"
+ "  --output_vcf=/output/YOUR_OUTPUT_VCF \\\n"
+ "  --output_gvcf=/output/YOUR_OUTPUT_GVCF \\\n"
+ "  --num_shards=$(nproc) **This will use all your cores to run make_examples. Feel free to change.**\n"
+ "\n"
+ "```\n"
+ "\n"
+ "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package.\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Joint calling \n"
+ "\n"
+ "### <a href=\"https://github.com/dnanexus-rnd/GLnexus/wiki/Getting-Started\">GLnexus</a>\n"
+ "\n"
+ "```\n"
+ "./glnexus_cli --config DeepVariant --bed ALDH2.bed \\\n"
+ "    dv_1000G_ALDH2_gvcf/*.g.vcf.gz > dv_1000G_ALDH2.bcf\n"
+ "```\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Summary\n"
+ "\n"
+ "* Deep learning (ConvNet) can be used to identify genetic variants from NextGen sequencing data\n"
+ "* Advantage over current state-of-the-art (GATK) is small (better at indels)\n"
+ "* Additional advantage is in adapting to identifying novel variants on non-illumina platform\n"
+ "  * All GATK results were obtained using 1000 genome known variants during indel Realign and dbSNP during base recalibration\n"
+ "* Disadvantage is the need to use GPU, maybe increased computation time.\n"
+ "\n"
+ "\n"
+ "---\n"
+ "## Similar approaches\n"
+ "\n"
+ "* Clairvoyante:  [pdf](https://www.biorxiv.org/content/early/2018/09/26/310458) |  [GitHub](https://github.com/anfederico/Clairvoyant)\n"
+ "* VariantionAnalysis: [pdf](https://www.biorxiv.org/content/early/2016/12/30/097469) |  [GitHub](https://github.com/CampagneLaboratory/variationanalysis) \n"
+ "* GenotypeTensor: [pdf](https://www.biorxiv.org/content/early/2018/06/05/338780) | [GitHub](https://github.com/CampagneLaboratory/GenotypeTensors)\n"
+ "\n"
+ "---\n"
+ "\n"
;
var script = document.querySelector('script[src="deepvar.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
