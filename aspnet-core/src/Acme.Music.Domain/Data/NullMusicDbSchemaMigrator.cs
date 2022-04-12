using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Acme.Music.Data;

/* This is used if database provider does't define
 * IMusicDbSchemaMigrator implementation.
 */
public class NullMusicDbSchemaMigrator : IMusicDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
