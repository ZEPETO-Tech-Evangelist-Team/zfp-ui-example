import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class StartMenuWindow extends ZepetoScriptBehaviour {

    Start() {    

    }

    public ShowWindow() {
        this.gameObject.SetActive(true);
    }

    public HideWindow() {
        this.gameObject.SetActive(false);
    }

}