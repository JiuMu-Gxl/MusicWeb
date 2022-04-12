using Volo.Abp.Settings;

namespace Acme.Music.Settings;

public class MusicSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(MusicSettings.MySetting1));
    }
}
