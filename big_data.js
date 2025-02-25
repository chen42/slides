(function () {
'strict'
var markdownContent = ''
+ "# Big data, artificial neural networks, and large language models.\n"
+ "\n"
+ "<hr style=\"color:royalblue\">\n"
+ "\n"
+ "## Hao Chen\n"
+ "\n"
+ "hchen@uthsc.edu\n"
+ "\n"
+ "Professor\n"
+ "\n"
+ "Department of Pharmacology, UTHSC\n"
+ "\n"
+ "Feb 25th 2025\n"
+ "\n"
+ " <h2><a href=\"https://chen42.github.io/slides/big_data.html\">\n"
+ " https://chen42.github.io/slides/big_data.html\n"
+ " </a></h2>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Outline\n"
+ "\n"
+ "- What makes data big?\n"
+ "- Unsupervised learning\n"
+ "  - Dimension reduction (e.g., principal component analysis)\n"
+ "  - Clustering (e.g., hierarchical clustering)\n"
+ "- Supervised learning\n"
+ "  - Regression\n"
+ "  - Deep neural networks\n"
+ "- Generative networks | Large language model | Transformers | GPT | ChatGPT\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Learning Objectives\n"
+ "\n"
+ "- Understand a few commonly used algorithms\n"
+ "\n"
+ "- Understand the idea behind deep neural network\n"
+ "\n"
+ "- Appreciate the tremendous potential of data science in medicine\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## What is big data\n"
+ "\n"
+ "- Big data\n"
+ "  _ Volume\n"
+ "  _ Boeing 737 generates 240 terabytes of flight data during a single flight\n"
+ "  _ Velocity\n"
+ "  _ sensors can have millisecond resolutions\n"
+ "  https://www.bbc.com/news/articles/clkkllxm4jzo\n"
+ "  _ Variety\n"
+ "  _ geospatial, audio, video \\* High Dimension !!\n"
+ "\n"
+ "- Major difference between \"Big\" data and \"small\" data\n"
+ "  - analysis methods\n"
+ "  - analysis objective\n"
+ "    - Hypothesis testing vs Discovery vs prediction\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Some data\n"
+ "\n"
+ "<font size=1>\n"
+ "\n"
+ "2004-01, 2004-02, 2004-03, 2004-04, 2004-05, 2004-06, 2004-07, 2004-08, 2004-09, 2004-10, 2004-11, 2004-12, 2005-01, 2005-02, 2005-03, 2005-04, 2005-05, 2005-06, 2005-07, 2005-08, 2005-09, 2005-10, 2005-11, 2005-12, 2006-01, 2006-02, 2006-03, 2006-04, 2006-05, 2006-06, 2006-07, 2006-08, 2006-09, 2006-10, 2006-11, 2006-12, 2007-01, 2007-02, 2007-03, 2007-04, 2007-05, 2007-06, 2007-07, 2007-08, 2007-09, 2007-10, 2007-11, 2007-12, 2008-01, 2008-02, 2008-03, 2008-04, 2008-05, 2008-06, 2008-07, 2008-08, 2008-09, 2008-10, 2008-11, 2008-12, 2009-01, 2009-02, 2009-03, 2009-04, 2009-05, 2009-06, 2009-07, 2009-08, 2009-09, 2009-10, 2009-11, 2009-12, 2010-01, 2010-02, 2010-03, 2010-04, 2010-05, 2010-06, 2010-07, 2010-08, 2010-09, 2010-10, 2010-11, 2010-12, 2011-01, 2011-02, 2011-03, 2011-04, 2011-05, 2011-06, 2011-07, 2011-08, 2011-09, 2011-10, 2011-11, 2011-12, 2012-01, 2012-02, 2012-03, 2012-04, 2012-05, 2012-06, 2012-07, 2012-08, 2012-09, 2012-10, 2012-11, 2012-12, 2013-01, 2013-02, 2013-03, 2013-04, 2013-05, 2013-06, 2013-07, 2013-08, 2013-09, 2013-10, 2013-11, 2013-12, 2014-01, 2014-02, 2014-03, 2014-04, 2014-05, 2014-06, 2014-07, 2014-08, 2014-09, 2014-10, 2014-11, 2014-12, 2015-01, 2015-02, 2015-03, 2015-04, 2015-05, 2015-06, 2015-07, 2015-08, 2015-09, 2015-10, 2015-11, 2015-12, 2016-01, 2016-02, 2016-03, 2016-04, 2016-05, 2016-06, 2016-07, 2016-08, 2016-09, 2016-10, 2016-11, 2016-12, 2017-01, 2017-02, 2017-03\n"
+ "\n"
+ "99, 100, 100, 98, 91, 88, 83, 85, 93, 94, 92, 79, 89, 91, 87, 87, 85, 79, 73, 75, 82, 84, 86, 69, 80, 80, 82, 76, 78, 70, 63, 67, 74, 75, 76, 62, 72, 71, 70, 68, 70, 63, 60, 61, 69, 69, 71, 59, 67, 68, 65, 68, 64, 60, 54, 57, 68, 65, 66, 55, 62, 63, 64, 63, 61, 58, 52, 55, 63, 65, 64, 53, 62, 63, 64, 61, 60, 56, 50, 52, 61, 60, 62, 50, 57, 59, 59, 54, 56, 53, 47, 49, 57, 59, 60, 48, 57, 58, 57, 54, 55, 48, 45, 48, 58, 59, 55, 46, 53, 56, 55, 55, 53, 48, 44, 46, 57, 59, 58, 48, 54, 57, 55, 53, 52, 48, 43, 47, 60, 60, 57, 48, 54, 57, 57, 54, 52, 49, 42, 48, 60, 59, 58, 48, 56, 58, 56, 55, 52, 48, 41, 48, 60, 59, 58, 48, 57, 60, 75\n"
+ "\n"
+ "69, 69, 70, 70, 67, 67, 69, 71, 66, 63, 68, 67, 70, 75, 67, 64, 69, 80, 100, 75, 67, 68, 69, 65, 64, 63, 61, 63, 61, 61, 65, 62, 59, 59, 61, 61, 56, 55, 54, 55, 56, 57, 57, 55, 53, 51, 55, 56, 56, 61, 55, 54, 54, 54, 56, 55, 50, 52, 55, 54, 53, 53, 53, 54, 54, 54, 56, 57, 54, 53, 57, 54, 56, 54, 54, 56, 59, 56, 58, 58, 53, 54, 56, 56, 58, 63, 63, 70, 82, 81, 81, 78, 76, 73, 83, 85, 82, 90, 82, 73, 70, 68, 72, 68, 64, 64, 64, 64, 63, 65, 64, 64, 66, 64, 65, 67, 61, 63, 65, 63, 65, 65, 66, 66, 66, 65, 66, 69, 63, 63, 67, 63, 69, 71, 69, 67, 70, 68, 77, 81, 79, 77, 79, 77, 75, 72, 72, 74, 73, 71, 75, 72, 73, 75, 73, 73, 77, 75, 71\n"
+ "\n"
+ "4, 4, 2, 3, 4, 3, 4, 5, 4, 3, 4, 4, 4, 4, 4, 4, 2, 4, 3, 2, 3, 4, 4, 5, 3, 3, 3, 4, 2, 2, 2, 2, 2, 4, 4, 2, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 2, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 4, 3, 4, 2, 3, 2, 4, 3, 3, 3, 3, 3, 2, 3, 4, 3, 3, 3, 4, 4, 3, 3, 4, 4, 4, 5, 4, 3, 4, 4, 5, 7, 5, 5, 6, 7, 8, 9, 8, 8, 7, 9, 10, 9, 10, 11, 14, 13, 13, 13, 12, 12, 14, 15, 15, 15, 23, 24, 25, 27, 24, 26, 29, 29, 27, 30, 32, 36, 35, 44, 43, 55, 55, 54, 54, 53, 55, 61, 64, 69, 71, 75, 84, 100\n"
+ "44, 78, 82, 100, 62, 46, 55, 50, 53, 63, 71, 56, 46, 70, 60, 90, 63, 62, 41, 40, 46, 51, 74, 54, 48, 46, 64, 67, 61, 39, 41, 34, 46, 59, 60, 46, 34, 47, 49, 59, 54, 37, 32, 35, 35, 59, 62, 39, 28, 40, 50, 62, 49, 31, 31, 32, 44, 55, 54, 44, 37, 45, 55, 67, 49, 39, 32, 33, 47, 63, 65, 52, 39, 59, 63, 75, 56, 41, 35, 42, 46, 58, 62, 56, 41, 53, 57, 67, 61, 42, 39, 43, 52, 60, 66, 54, 40, 55, 60, 70, 62, 44, 36, 40, 54, 58, 63, 56, 43, 53, 59, 75, 66, 44, 37, 39, 54, 58, 67, 59, 38, 55, 62, 74, 67, 43, 38, 45, 53, 62, 71, 64, 40, 54, 67, 77, 64, 46, 35, 38, 52, 62, 71, 61, 37, 52, 63, 79, 64, 39, 36, 40, 53, 62, 75, 57, 43, 56, 81\n"
+ "</font>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Cherry picking; Visualization\n"
+ "\n"
+ "![](./images/deep_learning/deepLearning_google_trends.png)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Two major types of machine learning\n"
+ "\n"
+ "- Unsupervised\n"
+ "\n"
+ "  - The data has no label\n"
+ "  - The label of the data are not used\n"
+ "\n"
+ "- Supervised learning\n"
+ "  - Part of the data has label (e.g. disease, healthy)\n"
+ "  - Can you predict the label of new data?\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Unsupervised learning\n"
+ "\n"
+ "What kind of inherent structure can an algorithm discover?\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Dimension reduction\n"
+ "\n"
+ "![](./images/deep_learning/fake_data.png)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Principal component analysis\n"
+ "\n"
+ "![](./images/deep_learning/fig_pca_principal_component_analysis.png)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Variable loading in a PCA analysis\n"
+ "\n"
+ "![](./images/p50retreat2017/pca_loading.png)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## t-SNE\n"
+ "\n"
+ "[The MNIST database](https://en.wikipedia.org/wiki/MNIST_database)\n"
+ "\n"
+ "<img src=\"https://lvdmaaten.github.io/tsne/examples/mnist_tsne.jpg\" width=50% height=40%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## snRNA-seq\n"
+ "\n"
+ "UMAP\n"
+ "\n"
+ "<img src=\"images/deep_learning/snRNAseq_PFC.png\" width=80% height=40%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Data for Hierarchical clustering\n"
+ "\n"
+ "![](./images/deep_learning/100.samples.boxplot.png)\n"
+ "\n"
+ "Each sample has the expression level of 12,000 genes. So the data set has 12,000,000 data points. The means of RNA samples are very similar.\n"
+ "\n"
+ "---\n"
+ "\n"
+ "<!---\n"
+ "\n"
+ "## Histogram and density plots\n"
+ "\n"
+ "![](./images/deep_learning/histogram_density.png)\n"
+ "\n"
+ "<pre> <code data-trim data-noescape>\n"
+ "# R code\n"
+ "library(ggplot2)\n"
+ "df0<-data.frame(x=rnorm(1000, mean=10,sd=10))\n"
+ "p<-ggplot(df0, aes(x=x))+geom_histogram(aes(y=..density..), color=\"grey60\", fill=\"grey80\")+\n"
+ "geom_density()+\n"
+ "theme(axis.text.y=element_text(face=\"bold\", size=12))\n"
+ "print(p)\n"
+ "</code>\n"
+ "</pre>\n"
+ "\n"
+ "## Density plots of ~100 RNA-Seq samples\n"
+ "\n"
+ "\n"
+ "![](./images/deep_learning/100.samples.densityplot.png)\n"
+ "\n"
+ "The distribution is somewhat different between brain regions.\n"
+ "\n"
+ "\n"
+ "--->\n"
+ "\n"
+ "## Hierarchical clustering\n"
+ "\n"
+ "![](./images/deep_learning/brain.region.hclust.png)\n"
+ "\n"
+ "Label of the sample is not part of the input data for clustering. And yet the samples from the same brain region stayed right next to each other.\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Phylogenetic tree of rats\n"
+ "\n"
+ "<img src=\"./images/deep_learning/rats_phylo.png\" width=60%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Supervised Learning\n"
+ "\n"
+ "- Training\n"
+ "  - Collect a set of data that has labels\n"
+ "    - Images with text annotation of the object in the image (e.g. [hand written digits](https://www.kaggle.com/c/digit-recognizer))\n"
+ "  - Select a mathematical model, adjust the parameter in the model so the output is close to the label\n"
+ "  - Repeatedly adjust the parameters for all the samples in the data collection, with an effort to reduce overall error rate\n"
+ "- Testing\n"
+ "  - Run a set of new samples with labels through the model\n"
+ "  - Record the number of errors.\n"
+ "- Deployment\n"
+ "  - Use the model to **predict** the label of completely new data.\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Decision Tree\n"
+ "\n"
+ "<a href=\"http://www.r2d3.us/visual-intro-to-machine-learning-part-1/\" target=_new><img src=\"./images/deep_learning/decisionTree.png\"></a>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Linear regression\n"
+ "\n"
+ "Y=a\\*X+b\n"
+ "\n"
+ "![](./images/deep_learning/linear_regression.png)\n"
+ "\n"
+ "<pre> <code data-trim data-noescape>\n"
+ "#Linear regression\n"
+ "library(ggplot2)\n"
+ "x0<-runif(10, min=0,max=9)\n"
+ "y0<-x0*rnorm(10,mean=1,sd=0.1)+rnorm(10,mean=0,sd=0.2)\n"
+ "dat<-data.frame(x=x0, y=y0)\n"
+ "summary(lm(x0~y0, dat))\n"
+ "P<-ggplot(dat, aes(x,y))+geom_point(color=\"grey40\",size=4)+stat_smooth(method=\"lm\")\n"
+ "print(P)\n"
+ "</code>\n"
+ "</pre>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Linear regresssion by iterative updates [R code](https://www.r-bloggers.com/linear-regression-by-gradient-descent/)\n"
+ "\n"
+ "![](./images/deep_learning/gradient_descent_for_linear_regression.gif)\n"
+ "\n"
+ "<pre> <code>\n"
+ "## theta is the parameter, alpha is learning rate\n"
+ "for (i in 1:num_iters) {\n"
+ " error <- (X %*% theta - y)\n"
+ " delta <- t(X) %*% error / length(y)\n"
+ " theta <- theta - alpha * delta\n"
+ "}\n"
+ "</code>\n"
+ "</pre>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## A neuron: biological model vs mathematical model\n"
+ "\n"
+ "<table><tr><td width=50%>\n"
+ "<img src=\"./images/deep_learning/neuron.gif\" width=90%>\n"
+ "</td>\n"
+ "<td width=50%>\n"
+ "<img src=\"./images/deep_learning/perceptron.png\" width=90%>\n"
+ "</td></tr>\n"
+ "</table>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Deep neural network\n"
+ "\n"
+ "![](http://neuralnetworksanddeeplearning.com/images/tikz40.png)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Gradient descent error surface\n"
+ "\n"
+ "<a href=\"https://spin.atomicobject.com/2014/06/24/gradient-descent-linear-regression/\">\n"
+ "<img src=\"./images/deep_learning/gradient_descent_error_surface.png\"></a>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Rectified Linear Unit (ReLU)\n"
+ "\n"
+ "Activation of the neurons\n"
+ "\n"
+ "![](./images/deep_learning/relu.png)\n"
+ "\n"
+ "<pre> <code data-trim data-noescape>\n"
+ "#ReLU\n"
+ "library(ggplot2)\n"
+ "relu<-function(x) sapply(x, function(z) max(-5,z))\n"
+ "x<-seq(from=-10, to=5, by=0.1)\n"
+ "y<-relu(x)\n"
+ "dat<-data.frame(X=x, Y=y)\n"
+ "P<-ggplot(dat, aes(x=X, y=Y))+geom_line(size=1.6, color=\"orange\")\n"
+ "print(P)\n"
+ "</code>\n"
+ "</pre>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Logistic regression\n"
+ "\n"
+ "Output layer\n"
+ "\n"
+ "![](./images/deep_learning/logit_regression.png)\n"
+ "\n"
+ "<pre> <code data-trim data-noescape>\n"
+ "#Logistic regression\n"
+ "library(ggplot2)\n"
+ "x<-c(runif(20, min=1,max=5), runif(4, min=5,max=10), runif(20, min=10,max=15))\n"
+ "y<-c(rep(1,22), rep(0,22))\n"
+ "dat<-data.frame(X=x, Y=y)\n"
+ "p<-ggplot(dat, aes(X,Y))+geom_point(color=\"grey40\")+stat_smooth(method=\"glm\", method.args=list(family=\"binomial\"), se=F)\n"
+ "print(p)\n"
+ "</code>\n"
+ "</pre>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Multilayer neural networks and backpropagation\n"
+ "\n"
+ "<a href=\"http://www.nature.com/nature/journal/v521/n7553/abs/nature14539.html\">\n"
+ "<img src=\"./images/deep_learning/network_structure.png\">\n"
+ "</a>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## A toy neural network\n"
+ "\n"
+ "<a href=\"https://playground.tensorflow.org/\" target=_new> \n"
+ "<img src=\"./images/deep_learning/toy.png\">\n"
+ "</a>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Convolutional Neural Networks\n"
+ "\n"
+ "<a href=\"https://poloclub.github.io/cnn-explainer/\">\n"
+ "\n"
+ "<img src=\"./images/deep_learning/cnn.png\"></a>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "<a href=\"https://www.ncbi.nlm.nih.gov/pubmed/28117445\">\n"
+ "<img src=\"./images/deep_learning/dermatologist.png\">\n"
+ "</a>\n"
+ "\n"
+ "<img src=\"./images/deep_learning/skin_cnn.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Dimension reduction on the last hidden layer\n"
+ "\n"
+ "![](./images/deep_learning/tSNE.png)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Detecting Rodent Social Interaction Using a CNN\n"
+ "\n"
+ "### Labeling the data\n"
+ "\n"
+ "<img src=\"./images/deep_learning/labelRatBodyParts.png\" width=50% height=70%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "<img src=\"./images/deep_learning/training_progression.png\" width=70%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Object detection and reconstruction of behavior\n"
+ "\n"
+ "<iframe width=\"1080\" height=\"630\" src=\"https://www.youtube.com/embed/9cmLqHrcnQM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Can deep neural networks be used on genetics data?\n"
+ "\n"
+ "<img src=\"./images/deep_learning/gwas.jpg\" width=70%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Use genetic variation to predict skin color in rats\n"
+ "\n"
+ "<pre><code data-trim data-noescape>\n"
+ "#python\n"
+ "from keras.models import Sequential\n"
+ "from keras.layers import Dense, Dropout, Activation, Flatten\n"
+ "\n"
+ "# read in the data, split training vs testing \n"
+ "dataset=pd.read_csv(\"./hs_snps.csv\",delimiter=\",\", dtype=\"float\", na_filter=True)\n"
+ "X = dataset[:,1:18571] #chr1 SNPs\n"
+ "Y = dataset[:,0] #coat color\n"
+ "X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.25, random_state=42)\n"
+ "\n"
+ "# construct the network\n"
+ "model = Sequential()\n"
+ "model.add(Dense(200, input_dim=18570, init='uniform', activation='relu'))\n"
+ "model.add(Dense(200, init='uniform', activation='relu'))\n"
+ "model.add(Dense(5, init='uniform', activation='softmax'))\n"
+ "\n"
+ "# compile the model\n"
+ "model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])\n"
+ "\n"
+ "# fit the model\n"
+ "model.fit(X_train, y_train, nb_epoch=100, batch_size=200)\n"
+ "\n"
+ "#evaluate the model and print results\n"
+ "scores = model.evaluate(X_test, y_test)\n"
+ "print(\"%s: %.2f%%\" % (model.metrics_names[1], scores[1]*100))\n"
+ "</code>\n"
+ "</pre>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## The road to ChatGPT?\n"
+ "\n"
+ "- [Generative models](https://medium.com/analytics-vidhya/an-introduction-to-generative-deep-learning-792e93d1c6d4)\n"
+ "- [Transformer](https://jalammar.github.io/illustrated-transformer/)\n"
+ "- [GPT](https://medium.com/sciforce/what-is-gpt-3-how-does-it-work-and-what-does-it-actually-do-9f721d69e5c1)\n"
+ "- [chatGPT](http://chat.openai.com)\n"
+ "- [open LLMs](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## But humans live in a world with multiple sensory modalities\n"
+ "\n"
+ "- [GPT-4 accepts image and text inputs](https://openai.com/research/gpt-4)\n"
+ "\n"
+ "- SORA can generate videos (1 min)\n"
+ "\n"
+ "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/HK6y8DAPN_0?si=IssyOSYcgzOPRrpw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Google Gemini\n"
+ "\n"
+ "<img src=\"https://www.unite.ai/wp-content/uploads/2023/12/2023-12-11-22_49_18-gemini_1_report.pdf.png\" width=60%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Microsoft: Agents!\n"
+ "\n"
+ "<img src=\"https://www.microsoft.com/en-us/research/uploads/prod/2023/12/EmergentAgentAI-657efcb33d5b4-1536x1074.png\" width=60%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## AGI\n"
+ "\n"
+ "<img src=\"https://miro.medium.com/v2/resize:fit:828/format:webp/1*UOAVMxmC1M1YznMBjX8o5w.png\" width=70%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Additional reading\n"
+ "\n"
+ "- [Are you ready for a computer to predict the death of your patients?](https://arxiv.org/abs/1711.06402)\n"
+ "\n"
+ "- [Deep learning is hard, why can we have a neural net to design other neural nets?](https://www.youtube.com/watch?v=o4rFnSh1ZFs)\n"
+ "\n"
+ "- [Can deep learning work withouth training data?](http://www.andrewng.org/portfolio/deep-learning-and-unsupervised-feature-learning/)\n"
+ "\n"
+ "- [Applications in medicine: diagnosis, treatments](http://www.nvidia.com/object/deep-learning-in-medicine.html)\n"
;
var script = document.querySelector('script[src="big_data.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
