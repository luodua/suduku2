
#!/usr/bin/env python
from flask import *

import random
import os
import sys
import json
import handle
import time

#Flask访问不到static下的静态文件404,加上static_url_path=''
app = Flask(__name__,static_url_path='')


xxx="aa"
def generate_sudoku(mode):
    return handle.generate_sudoku(mode)
#./data.txt
# 对应ajax中url路径
@app.route('/', methods=['GET', 'POST'])
def totalNumber():
    return render_template('index.html')

@app.route('/api', methods=['GET', 'POST'])
def tow():
    dif=20#默认难度
    non_empty_lines = []
    if request.method == 'GET':
        dif=int(request.args['dif'])
        print(dif)
    
    
    #预读取以加速数独生成，如果已经生成了data，直接读取然后再后台生成数据
    if(os.path.exists('./data.txt')):
            f = open('./data.txt', 'r')
            lines = f.readlines() # 把文件按照换行符进行读取
            f.close()
            if(len(lines)==9):
                for line in reversed (lines):
            # 去掉行尾的换行符
                    line = line.strip()
                    # 如果行不为空，就添加到列表中
                    if line:
                        non_empty_lines.insert(0,line)
                str_json = json.dumps(non_empty_lines, ensure_ascii=False, indent=2)
                handle.generate9(dif) #启动九个进程
                return str(str_json)
    
    #没有生成的话，重新生成
    handle.generate9(dif) #启动九个进程生成数独，保存在data文件上
    

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

@app.route('/send_bage', methods=['GET', 'POST'])
def _3():
    if request.method == 'GET':
        print(request.args)
        f = open('h1.txt', 'r')
        
        #content = f.readline() # 表示读取一行，每次读取后指针移动一行
        lines = f.readlines() # 把文件按照换行符进行读取，返回一个列表print(content)
       
# 定义一个空列表来存储不空的四行
        non_empty_lines = []

# 遍历每一行
        for line in reversed (lines):
            # 去掉行尾的换行符
            line = line.strip()
            # 如果行不为空，就添加到列表中
            if line:
                non_empty_lines.insert(0,line)
            # 如果列表中已经有四个元素，就停止循环
            if len(non_empty_lines) == 7:
                break

        print(non_empty_lines)
        aa=(float(non_empty_lines[1])+float(non_empty_lines[6]))/2
        bb=(float(non_empty_lines[3])+float(non_empty_lines[4]))/2
        cc=(float(non_empty_lines[2])+float(non_empty_lines[5]))/2
        
        f.close()
        return [aa,bb,cc]
        
# 主函数
if __name__ == '__main__':
   
    # 设置host与端口
    #/os.system("python3 send_link.py")
    app.run(host = "127.0.0.1", port = 8086)
    
    


