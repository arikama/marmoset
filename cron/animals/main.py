from bs4 import BeautifulSoup
import re
import requests

class Regex():

    p = re.compile("rand_medium\\\"'>([a-z]+)")

    def all(self, s):
        animals = []
        matches = self.p.finditer(s)
        for match in matches:
            animal = match.group(1)
            animals.append(animal)
        return animals

class Scraper():

    def __init__(self, parser):
        self.parser = parser

    def start(self):
        animals = self._scrapeAnimals()
        for animal in animals:
            print('animal', animal)
            self._post(animal)

    def _post(self, animal):
        json = {
            "payload": {
                "word": animal
            }
        }
        p = requests.post("http://service-cluster-ip-server/words", json=json)
        return p.status_code, json

    def _scrapeAnimals(self):
        json = {
            "url": "https://www.randomlists.com/random-animals",
            "userAgent": "WebScraper"
        }
        r = requests.get('http://service-cluster-ip-webscraper:8080', json=json)
        soup = BeautifulSoup(r.text, features="html.parser")
        animals = self.parser.all(str(soup))
        return animals

def main():
    parser = Regex()
    scraper = Scraper(parser)
    scraper.start()

main()
