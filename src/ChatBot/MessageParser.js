class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.replace(/ /g,'').toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }
      if (lowerCaseMessage.includes("tellusmore")) {
        this.actionProvider.handleJavascriptList();
      }
    }
  }
  
  export default MessageParser