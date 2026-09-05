# Streamlit Community Cloud 部署说明

## 需要上传到 GitHub 的关键文件

- `streamlit_app.py`
- `requirements.txt`
- `.streamlit/config.toml`
- `tablet_survey/index.html`
- `tablet_survey/main.js`
- `tablet_survey/style.css`
- `tablet_survey/assets/`
- `tablet_survey/manifest.json`

## Streamlit Community Cloud 设置

部署时选择：

```text
Main file path: streamlit_app.py
```

部署完成后，用 Streamlit 提供的 `https://...streamlit.app` 地址访问。摄像头录制和 ZIP 下载都发生在访问者自己的浏览器中，服务器只托管网页文件。

## 本地预览

```bash
pip install -r requirements.txt
streamlit run streamlit_app.py
```

如果只想测试纯前端版本，也可以继续使用：

```bash
cd tablet_survey
python -m http.server 8080
```

然后打开：

```text
http://127.0.0.1:8080/index.html
```
