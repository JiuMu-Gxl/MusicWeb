using Volo.Abp.Modularity;

namespace Acme.Music;

[DependsOn(
    typeof(MusicApplicationModule),
    typeof(MusicDomainTestModule)
    )]
public class MusicApplicationTestModule : AbpModule
{

}
