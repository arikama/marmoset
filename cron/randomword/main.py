from bs4 import BeautifulSoup
import requests

r = requests.get("https://randomword.com")
soup = BeautifulSoup(r.text, features="html.parser")
word = soup.find(id="random_word").get_text()
json = {
    "payload": {
        "word": word
    }
}
p = requests.post("http://service-cluster-ip-server/words", json=json)
print(r.status_code, json)
