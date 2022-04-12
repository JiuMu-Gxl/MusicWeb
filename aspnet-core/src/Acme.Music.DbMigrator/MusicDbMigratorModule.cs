using Acme.Music.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Acme.Music.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(MusicEntityFrameworkCoreModule),
    typeof(MusicApplicationContractsModule)
    )]
public class MusicDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
