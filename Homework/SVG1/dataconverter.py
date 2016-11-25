import csv;
import json;

csvFile = 'PlantGrowth'
jsonFile = 'PlantGrowth.json'
fieldname1 = 'weight'
fieldname2 = 'group'

csvFile = open('csvFile', 'r');
jsonFile = open('jsonFile', 'w')

fieldnames = ('fieldname1', 'fieldname2')
Reader = csv.DictReader(csvFile, fieldnames);

for row in Reader:
	json.dump(row, jsonFile)
	jsonFile.write(',')