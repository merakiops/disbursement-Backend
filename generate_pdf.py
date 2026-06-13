# from weasyprint import HTML
# HTML(filename='Hanna_Demurrage.html').write_pdf('output.pdf')


import asyncio
from playwright.async_api import async_playwright
from pathlib import Path


HTML_FILE = "demurrage_statement.html"
PDF_FILE = "demurrage_statement.pdf"


async def generate_pdf():
    async with async_playwright() as p:

        browser = await p.chromium.launch(
            headless=True,
            args=[
                "--disable-dev-shm-usage",
                "--no-sandbox"
            ]
        )

        page = await browser.new_page()

        html_path = Path(HTML_FILE).resolve()

        await page.goto(
            f"file://{html_path}",
            wait_until="networkidle"
        )

        await page.emulate_media(media="screen")

        await page.pdf(
            path=PDF_FILE,
            format="A4",
            print_background=True,
            prefer_css_page_size=True,
            margin={
                "top": "0cm",
                "right": "0cm",
                "bottom": "0cm",
                "left": "0cm"
            }
        )

        await browser.close()

    print(f"PDF Generated: {PDF_FILE}")


if __name__ == "__main__":
    asyncio.run(generate_pdf())