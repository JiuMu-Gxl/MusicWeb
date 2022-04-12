using Acme.Music.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Acme.Music;

[DependsOn(
    typeof(MusicEntityFrameworkCoreTestModule)
    )]
public class MusicDomainTestModule : AbpModule
{

}
