for i in ./chr10_gatk*png; do
	j=`basename $i .png`_trim.png
	echo $j
	convert -trim -border 50 $i $j 
done
