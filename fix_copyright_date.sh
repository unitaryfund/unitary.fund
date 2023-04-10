#! /usr/bin/bash

##########################################
#
# This script updates the copyright year
# on all html files. Run the script once
# a year by calling:
#     ./fix_copyright_date.sh
# from a linux command line annually.
#
##########################################

CURRENT_YEAR=$(date +"%Y")
LAST_YEAR=$((CURRENT_YEAR - 1))

fix_year() {
	sed -i "s/copy;2020-${LAST_YEAR}/copy;2020-${CURRENT_YEAR}/g" ${1}*.html
}

for D in *; do
	if [ -d "${D}" ]; then
		COUNT=`ls -1 ${D}/*.html 2>/dev/null | wc -l`
		if [ $COUNT != 0 ]; then
			fix_year "./${D}/"
		fi
	fi
done

fix_year "./"
