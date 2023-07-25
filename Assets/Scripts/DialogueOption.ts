import { TextMeshProUGUI } from 'TMPro';
import { UnityAction } from 'UnityEngine.Events';
import { Button } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class DialogueOption extends ZepetoScriptBehaviour {
    private dialogueText: TextMeshProUGUI;
    private button: Button;
    Awake()
    {
        this.dialogueText = this.GetComponentInChildren<TextMeshProUGUI>();
        this.button = this.GetComponentInChildren<Button>();
    }
    
    public SetDialogue(s: string, onClick: UnityAction)
    {
        this.dialogueText.text = s;   
        this.button.onClick.AddListener(onClick);
    }

}