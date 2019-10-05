from bs4 import BeautifulSoup
import requests

class Scraper():

    def post(self):
        word = self._scrapeWord()
        json = {
            "payload": {
                "word": word
            }
        }
        p = requests.post("http://service-cluster-ip-server/words", json=json)
        return p.status_code, json

    def _scrapeWord(self):
        r = requests.get("https://randomword.com")
        soup = BeautifulSoup(r.text, features="html.parser")
        word = soup.find(id="random_word").get_text()
        return word

def main():
    scraper = Scraper()
    for i in range(10):
        status, json = scraper.post()
        print(i, status, json)

main()
