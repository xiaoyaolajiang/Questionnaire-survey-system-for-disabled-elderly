from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

APP_DIR = Path(__file__).resolve().parent
SURVEY_HTML = APP_DIR / "tablet_survey" / "index.html"

st.set_page_config(
    page_title="老年人失能风险监测评估",
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.markdown(
    """
    <style>
      .stApp { background: #eef7f6; }
      header[data-testid="stHeader"] { background: transparent; }
      .block-container {
        max-width: 1180px;
        padding-top: 1.2rem;
        padding-bottom: 1rem;
      }
      iframe { border-radius: 10px; background: white; }
    </style>
    """,
    unsafe_allow_html=True,
)

st.title("老年人失能风险监测评估")
st.caption("问卷、摄像头录制与本地 ZIP 导出均在访问者浏览器内完成；服务器仅负责托管页面。")

if not SURVEY_HTML.exists():
    st.error("未找到 tablet_survey/index.html。请确认已将 tablet_survey 文件夹一并上传到 GitHub 仓库。")
    st.stop()

components.html(SURVEY_HTML.read_text(encoding="utf-8"), height=920, scrolling=True)
