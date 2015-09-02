
while [[ true ]]; do
	DATE=`date +%Y-%m-%d`
	CAMBIO="`node server`";
	echo -e "`date` | Q$CAMBIO = \$1.00";
	echo "$DATE - $CAMBIO" >> exchange.txt
	sleep 1d
done


