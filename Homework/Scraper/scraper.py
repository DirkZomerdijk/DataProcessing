#!/usr/bin/env python
# Name: Dirk Zomerdijk  
# Student number: 10530274
'''
This script scrapes IMDB and outputs a CSV file with highest rated tv series.
'''
# import libraries
import csv
import unicodedata
import re

from pattern.web import URL, DOM, plaintext

# initiate constants for input and output
TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'


def extract_tvseries(dom):
    '''
    Extract a list of highest rated TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Rating
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''
    # create arrays to insert the scraped data
    series = []
    titles = []
    runtimes = []
    genres = []
    ratings = []
    actors = []

    # select series by class
    for serie in dom.by_class("lister-item-content"):

        # select titles by tag and append to target array
        for title in serie.by_tag('a')[0]:
            titles.append(title)

        # select runtimes by class, remove characters, and append to target array 
        for runtime in serie.by_class('runtime')[0]:
            runtimes.append(re.sub('[a-z]', '', str(runtime)))

        # select genres by class, remove whitespace, and append to target array 
        for genre in serie.by_class('genre')[0]:
            genres.append(str(genre).strip())

        # select ratings by tag and append to target array
        for rating in serie.by_tag('strong')[0]:
            ratings.append(rating)

        # create array for actors per serie
        joined_actors= []
        # select actors per serie and append them into target aray, corrected for unicode    
        for actor in serie.by_tag('a')[12:]:
            joined_actors.append(unicodedata.normalize('NFKD', actor.content).encode('ascii', 'ignore'))

        # select joined_actors per serie and append them to target array seperated by a ','  
        actors.append(', '.join(joined_actors))
        
    # select titles, ratings, genres, actors and runtimes per serie and append to target array
    for i in range(len(titles)):
        series.append([titles[i], ratings[i], genres[i], actors[i], runtimes[i]])


    # ADD YOUR CODE HERE TO EXTRACT THE ABOVE INFORMATION ABOUT THE
    # HIGHEST RATED TV-SERIES
    # NOTE: FOR THIS EXERCISE YOU ARE ALLOWED (BUT NOT REQUIRED) TO IGNORE
    # UNICODE CHARACTERS AND SIMPLY LEAVE THEM OUT OF THE OUTPUT.

    return series  # replace this line as well as appropriate


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest rated TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Rating', 'Genre', 'Actors', 'Runtime'])

    # write each row of tvseries
    for row in tvseries:
        writer.writerow(row)

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)