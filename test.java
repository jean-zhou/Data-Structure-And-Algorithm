// java中的interface
// 1,定义接口
public interface AppMaintainService {
    JSONObject queryAppInfo(JSONObject param)
    JSONObject alterAppMaintainer(JSONObject param, HttpServletRequest request)
    List<CurrentMaintainInfo> queryCurrentInfo(JSONObject)
}

// 实现接口
@Service
public class AppMaintainServiceIml implements AppMaintainService {
    private static final Logger LOGGER = ....()  // 打印日志函数
    
    @Autouired
    private ZookeeperService ZookeeperService
    
    @Override
    public JSONObject queryAppInfo(JSONObject) {
        // ...
    }

    // ... 
}