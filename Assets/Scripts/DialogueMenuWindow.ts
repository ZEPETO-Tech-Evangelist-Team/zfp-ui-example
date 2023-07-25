import { TextMeshProUGUI } from 'TMPro';
import {Collider, GameObject, Transform } from 'UnityEngine';
import { Button } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DialogueOption from './DialogueOption';
import Main from './Main';
import { WindowCallType } from './UIManager';

export default class DialogueMenuWindow extends ZepetoScriptBehaviour {
    public dialogueParentRow1: Transform;
    public dialogueParentRow2: Transform;
    
    public closeButton: Button;
    
    public responseText: TextMeshProUGUI;
    
    public dialoguePrefab: GameObject;
    
    public npcString: string;
    public dialogueStrings: string[] = new Array<string>();
    public responseStrings: string[] = new Array<string>();
    
    private dialogueOptions: DialogueOption[] = new Array<DialogueOption>();

    Awake()
    {
        this.closeButton.onClick.AddListener(() => { Main.GetInstance().UIManager.ExecuteWindowCommand(WindowCallType.HIDE_DIALOGUE_MENU_WINDOW); });
    }
    
    public ShowWindow() {
        this.gameObject.SetActive(true);
        this.CreateDialogueOptions();
    }

    public HideWindow() {
        this.gameObject.SetActive(false);
        this.DestroyDialogueOptions();
    }
    
    public ShowResponse(response: string)
    {
        this.responseText.text = response;
        this.DestroyDialogueOptions();
        this.closeButton.gameObject.SetActive(true);
    }
    
    public CreateDialogueOptions()
    {
        this.responseText.text = this.npcString;
        let halfCount : number = Math.floor(this.dialogueStrings.length/2);
        this.closeButton.gameObject.SetActive(false);
        for (let i = 0; i < this.dialogueStrings.length; i++)
        {
            let dialogueOption: DialogueOption = GameObject.Instantiate<GameObject>(this.dialoguePrefab, (i < halfCount) ? this.dialogueParentRow1 : this.dialogueParentRow2).GetComponent<DialogueOption>();
            let response = this.responseStrings[i];
            let option = this.dialogueStrings[i];
                
            dialogueOption.SetDialogue(option, () => { this.ShowResponse(response); });
            this.dialogueOptions.push(dialogueOption);
        }
    }
    
    public DestroyDialogueOptions()
    {
        this.dialogueOptions.forEach((option) =>
        {
           GameObject.Destroy(option.gameObject); 
        });
        
        this.dialogueOptions = new Array<DialogueOption>();
    }

}