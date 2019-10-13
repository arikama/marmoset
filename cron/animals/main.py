from bs4 import BeautifulSoup
import requests

class Scraper():

    def post(self):
        self._scrapeAnimals()

    def _scrapeAnimals(self):
        json = {
            "url": "https://www.randomlists.com/random-animals",
            "userAgent": "WebScraper"
        }
        r = requests.get('http://service-cluster-ip-webscraper:8080', json=json)
        soup = BeautifulSoup(r.text, features="html.parser")
        print('soup', soup)

def main():
    scraper = Scraper()
    scraper.post()

main()
