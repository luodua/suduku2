
#!/usr/bin/env python
from flask import *

import random
import os
import sys
import json
import solve
import time

#Flask访问不到static下的静态文件404,加上static_url_path=''
app = Flask(__name__,static_url_path='')




#./data.txt
# 对应ajax中url路径
@app.route('/', methods=['GET', 'POST'])
def totalNumber():
    return render_template('index.html')

@app.route('/check', methods=['GET', 'POST'])
def checkA():
    before=''
    after=''
    if request.method == 'GET':
        before=str(request.args['before'])
        after=str(request.args['after'])
    # print(before)
    # print(after)
    solve.solve9()
    while(True):#轮询文件，看进程是否处理完毕
        if(os.path.exists('./result.txt')):
            f = open('./result.txt', 'r')
    
            #content = f.readline() # 表示读取一行，每次读取后指针移动一行
            lines = f.readlines() # 把文件按照换行符进行读取
            f.close()
            if(len(lines)==9):
                break
    return solve.check(before,after)




@app.route('/solve', methods=['GET', 'POST'])
def solveA():
    # if request.method == 'GET':
    #     dif=int(request.args['dif'])
    # print(dif)
    non_empty_lines = []
    solve.solve9()


    while(True):#轮询文件，看进程是否处理完毕
        if(os.path.exists('./result.txt')):
            f = open('./result.txt', 'r')
    
            #content = f.readline() # 表示读取一行，每次读取后指针移动一行
            lines = f.readlines() # 把文件按照换行符进行读取
            f.close()
            if(len(lines)==9):
                break

    


# 遍历每一行
    for line in reversed (lines):
        # 去掉行尾的换行符
        line = line.strip()
        # 如果行不为空，就添加到列表中
        if line:
            non_empty_lines.insert(0,line)
    str_json = json.dumps(non_empty_lines, ensure_ascii=False, indent=2)
    return str(str_json)

@app.route('/api', methods=['GET', 'POST'])
def tow():
    dif=20#默认难度
    non_empty_lines = []
    if request.method == 'GET':
        dif=int(request.args['dif'])
        print(dif)

    
    # #预读取以加速数独生成，如果已经生成了data，直接读取然后再后台生成数据
    # if(os.path.exists('./data.txt')):
    #         f = open('./data.txt', 'r')
    #         lines = f.readlines() # 把文件按照换行符进行读取
    #         f.close()
    #         if(len(lines)==9):
    #             for line in reversed (lines):
    #         # 去掉行尾的换行符
    #                 line = line.strip()
    #                 # 如果行不为空，就添加到列表中
    #                 if line:
    #                     non_empty_lines.insert(0,line)
    #             str_json = json.dumps(non_empty_lines, ensure_ascii=False, indent=2)
    #             solve.generate9(dif) #启动九个进程
    #             return str(str_json)
    
    #没有生成的话，重新生成
    solve.generate9(dif) #启动九个进程生成数独，保存在data文件上


    while(True):#轮询文件，看进程是否处理完毕
        if(os.path.exists('./data.txt')):
            f = open('./data.txt', 'r')
    
            #content = f.readline() # 表示读取一行，每次读取后指针移动一行
            lines = f.readlines() # 把文件按照换行符进行读取
            f.close()
            if(len(lines)==9):
                break

    


# 遍历每一行
    for line in reversed (lines):
        # 去掉行尾的换行符
        line = line.strip()
        # 如果行不为空，就添加到列表中
        if line:
            non_empty_lines.insert(0,line)
    str_json = json.dumps(non_empty_lines, ensure_ascii=False, indent=2)
    return str(str_json)


        
# 主函数
if __name__ == '__main__':
   
    # 设置host与端口
    #/os.system("python3 send_link.py")
    app.run(host = "127.0.0.1", port = 8086)
    
    


