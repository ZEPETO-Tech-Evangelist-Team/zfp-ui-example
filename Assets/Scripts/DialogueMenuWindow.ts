import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class DialogueMenuWindow extends ZepetoScriptBehaviour {

    Start() {    

    }

    public ShowWindow() {
        this.gameObject.SetActive(true);
    }

    public HideWindow() {
        this.gameObject.SetActive(false);
    }

}