export const copyToClipboard = (text: string) => {
	try {
		navigator.clipboard.writeText(text)
		console.log("文本已成功复制到剪贴板")
		return true
	} catch (err) {
		console.error("无法复制文本: ", err)
		return false
	}
}
