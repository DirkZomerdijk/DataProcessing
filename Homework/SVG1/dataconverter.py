import csv;
import json;

csvFile = open('canabisdata.txt', 'r');
jsonFile = open('canabisdata.json', 'w')

fieldnames = ('Country', 'Data')
Reader = csv.DictReader(csvFile, fieldnames);

for row in Reader:
	json.dump(row, jsonFile)
	jsonFile.write(',')