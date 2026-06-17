f=open("assets/js/app.js","r",encoding="utf-8")
c=f.read()
f.close()
import re
print("welcome:",c.count("welcome"))
print("cases:",len(list(re.finditer('case "',c))))
print("innerHTML:",c.count("innerHTML"))
print("len:",len(c))
