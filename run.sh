
while [[ true ]]; do
	CAMBIO="`node server`";
	echo -e "`date` | Q$CAMBIO = \$1.00";
	echo "$CAMBIO" >> exchange.txt
	sleep 1d
done


