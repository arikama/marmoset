from bs4 import BeautifulSoup
import urllib3

http = urllib3.PoolManager()
r = http.request('GET', 'https://randomword.com')
soup = BeautifulSoup(r.data, features='html.parser')
word = soup.find(id='random_word').get_text()
print(word)
