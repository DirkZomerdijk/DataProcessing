import csv;
import json;

csvFile = 'countryData.csv'
jsonFile = 'countryData.json'

csvFile = open(csvFile, 'r')
jsonFile = open(jsonFile, 'w')

headers = csvFile.readline().replace('\n', '').split(',')
Reader = csv.DictReader(csvFile, headers)

data = []
for row in Reader:
	data.append(row)
json.dump(data, jsonFile, indent=4)
