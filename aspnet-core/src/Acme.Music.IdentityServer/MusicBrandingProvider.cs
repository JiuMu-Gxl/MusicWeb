using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace Acme.Music;

[Dependency(ReplaceServices = true)]
public class MusicBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Music";
}
