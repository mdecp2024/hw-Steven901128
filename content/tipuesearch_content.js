var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-Steven901128 \n 個人網站: https://github.com/Steven901128 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '\n 每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '第一題 \n \n 第二題 \n \n 第三題 心得: 發現了一個非常好用的程式碼，只要將其中的數據換成自己需要的，就可以像一台專屬科目的計算機，非常方便。 \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 第一題程式 \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 第二題程式碼 \n 網頁上的方格與塗色 \n 3. 完成上列題目後, 請利用 Youtube 影片 簡報 個人的解題過程與心得. \n gist 程式碼連結 \n from browser import html\nfrom browser import document as doc\nimport math\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 20\n\n# gs*tc = canvas width and height\nctx = canvas.getContext("2d")\n\ndef dRect(lux, luy, w, h, s=1, c=\'lightgrey\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\ndef grid(width, height, grid_pix):\n    # x 方向共 width 格\n    # y 方向共 height 格\n    # grid_pix, 每一個的 pixel 點數\n    # 利用迴圈與座標增量繪圖\n    for i in range(width):\n        for j in range(height):\n            dRect(i*grid_pix, j*grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x-1, y-1, gs, gs)\n\n# 預設參數\ncenter_x, center_y = 5, 5  # 圓心\nradius = 4  # 預設圓的半徑\ngrid_width, grid_height = 11, 11  # 預設格子寬高\n\n# 在 grid 中畫圓\ndef draw_circle():\n    ctx.clearRect(0, 0, canvas.width, canvas.height)  # 清空畫布\n    grid(grid_width, grid_height, gs)  # 重新繪製格子\n    for i in range(grid_width):\n        for j in range(grid_height):\n            # 計算 (i,j) 到圓心的距離\n            dist = math.sqrt((i - center_x) ** 2 + (j - center_y) ** 2)\n            if abs(dist - radius) < 0.5:  # 若該點在圓邊界，填色\n                fill(i * gs, j * gs, "black")\n\n# 建立輸入框和按鈕\ninput_width = html.INPUT(type="number", value=grid_width, min=5, max=20, step=1)\ninput_height = html.INPUT(type="number", value=grid_height, min=5, max=20, step=1)\ninput_radius = html.INPUT(type="number", value=radius, min=1, max=10, step=0.1)\n\ninput_width.attrs["style"] = "margin-right: 10px;"\ninput_height.attrs["style"] = "margin-right: 10px;"\ninput_radius.attrs["style"] = "margin-right: 10px;"\n\nbtn_draw = html.BUTTON("重新繪製")\n\n# 添加事件監聽\ndef update_circle(ev):\n    global radius, grid_width, grid_height, center_x, center_y\n    try:\n        grid_width = int(input_width.value)  # 讀取格子寬度\n        grid_height = int(input_height.value)  # 讀取格子高度\n        radius = float(input_radius.value)  # 讀取圓的半徑\n        center_x, center_y = grid_width // 2, grid_height // 2  # 更新圓心\n        draw_circle()  # 重新繪製\n    except ValueError:\n        print("請輸入有效的數值")  # 顯示錯誤訊息\n\nbtn_draw.bind("click", update_circle)\n\n# 加入到 HTML 畫面中\nbrython_div <= html.P("背景寬度:")\nbrython_div <= input_width\nbrython_div <= html.P("背景高度:")\nbrython_div <= input_height\nbrython_div <= html.P("圓的半徑:")\nbrython_div <= input_radius\nbrython_div <= btn_draw\n\n# 畫出背景格子\ngrid(grid_width, grid_height, gs)\n\n# 畫圓形區域\ndraw_circle() \n w12 \n \n 程式碼連結 \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12', 'text': '\n 程式碼連結 \n n = 5\nspace = "_"\n\'\'\'\nfor i in range(n): # 對於每一行\n    # 印出空格\n    print(space * (n - i - 1), end=\' \')\n\'\'\'\n"""\nfor i in range(n): # 對於每一行\n    # 印出空格\n    print(space * (n - i - 1), end=\' \')\n"""\nfor i in range(n): # 對於每一行\n    # 印出空格\n    #print(space * (n - i - 1), end=\' \')\n    print("目前的數字為 " + str(i)) \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w12_hw', 'text': '01程式碼 \n 所運用到的程式語法為print，執行後會顯示你輸入在print後的字串 \n 02程式碼 \n 使用到的語法是input及print，執行後，他會出現提示框，讓你輸入自己想要的字串，再將字串放到預設好的對話當中。 \n 03程式碼 \n 同樣是 input和print，還有涉及到if，else的語法，若是有做出設計者預設的答案，就會做出不同的回應。 \n 04程式碼 \n 05程式碼 \n 06程式碼 \n 07程式碼 (待修正) \n 08程式碼 \n 09程式碼 \n 10程式碼', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'HW2', 'text': '\n \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};