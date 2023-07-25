import { Collider } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Main from './Main';
import { WindowCallType } from './UIManager';

export default class WindowTriggerScript extends ZepetoScriptBehaviour {
    public WindowCallType : WindowCallType;
    Start() {    

    }

    OnTriggerEnter(other : Collider) {
        Main.GetInstance().UIManager.ExecuteWindowCommand(this.WindowCallType);
    } 

}