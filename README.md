# 这是一个多线程生成9个数独的程序，前端Vue，ant design，JavaScript设计。后端使用Python语言，创建九个进程生成数独。

已经实现的功能

- 并发生成可解的9个九宫格数独个数。

- 并发求解生成的9个九宫格数独。

- 不仅支持系统并发求解，还可以用户输入求解数独。

-  针对用户的求解给出提出性信息（求解正确或错误）。

# Python版本：3.8

用到的库：
os，
numpy，
random，
multiprocessing，
time，
json，
sys，
flask，
threading，
安装完库之后，在项目根目录下面，命令行执行下述指令即可启动：
```
python serve.py
```
