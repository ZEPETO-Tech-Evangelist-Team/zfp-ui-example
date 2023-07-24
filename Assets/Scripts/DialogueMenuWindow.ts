import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DialogueOption from './DialogueOption';

export default class DialogueMenuWindow extends ZepetoScriptBehaviour {
    public dialogueGO: GameObject[] = new Array<GameObject>();
    
    private dialogueOptions: DialogueOption[] = new Array<DialogueOption>();
    
    Start() {     
        this.dialogueGO.forEach(go => {
            this.dialogueOptions.push(go.GetComponent<DialogueOption>());
        })
    }
    

    public ShowWindow() {
        this.gameObject.SetActive(true);
    }

    public HideWindow() {
        this.gameObject.SetActive(false);
    }

}