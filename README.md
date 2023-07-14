# Javascript_OAuth_Example

## 簡介

Javascript_OAuth_Example 是一個使用 JavaScript 主要撰寫的示例程式，主要用於實現 OAuth 驗證機制中的取得 token 的部分。程式分為兩個部分：瀏覽器端的 JavaScript 程式和 Node.js 伺服器版本。

在開發及測試的環境中，我們使用以下配置：Windows 10、Chrome 版本 114.0.5735.199 (正式版本) (64 位元)、Node.js v16.18.0，使用的驗證伺服器為 Keycloak 19.0.2（請注意，20 版本在 authorization code 流程中會出現 redirect_uri 錯誤）。

此程式實現了 OAuth 驗證機制中取得 token 的部分，並實現了以下兩種驗證流程：client credentials flow（客戶端憑證流程）和 authorization code flow（授權碼流程）。

程式主要分為兩個部分：

1. 瀏覽器版本：程式檔案位於 `./Javascript/` 目錄下。建議使用 Visual Studio Code 開啟該目錄並啟用 Live Server 來在瀏覽器中運行程式。
2. 伺服器版本：切換到程式根目錄後，執行 `npm install` 來安裝相關套件，然後執行 `node server.js` 來啟動伺服器。在瀏覽器中連線到 `/api/auth/authorization_code` 測試 authorization code flow，或連線到 `/api/auth/client_credentials` 測試 client credentials flow。

## 安裝說明

按照以下步驟進行安裝：

1. 確保已安裝 Node.js v16.18.0 或更新版本。
2. 下載程式壓縮檔或使用 Git 克隆存儲庫。
3. 解壓縮程式壓縮檔（如果適用）。
4. 開啟命令提示字元或終端機，切換到程式目錄。

## 執行說明

按照以下步驟執行程式：

1. 瀏覽器版本：
   - 使用 Visual Studio Code 開啟 `./Javascript/` 目錄。
   - 開啟 Live Server。
   - 在瀏覽器中訪問相應的 URL 以使用程式。

2. 伺服器版本：
   - 在命令提示字元或終端機中，切換到程式目錄。
   - 執行 `npm install` 安裝相關套件。
   - 執行 `node server.js` 啟動伺服器。
   - 在瀏覽器中連線到 `/api/auth/authorization_code` 測試 authorization code flow，或連線到 `/api/auth/client_credentials` 測試 client credentials flow。

請注意，在使用 authorization code flow 時，請確保 Keycloak 版本為 19.0.2，因為後續版本（如 20 版本）可能會在 authorization code 流程中出現 redirect_uri 錯誤。

