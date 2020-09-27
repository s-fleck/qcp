Search.setIndex({docnames:["changelog","index","qop","readme"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["changelog.rst","index.rst","qop.rst","readme.rst"],objects:{"":{qop:[2,0,0,"-"]},"qop.cli":{color_status:[2,1,1,""],format_response:[2,1,1,""],format_response_summary:[2,1,1,""],handle_convert:[2,1,1,""],handle_copy_move:[2,1,1,""],handle_daemon_destroy:[2,1,1,""],handle_daemon_is_active:[2,1,1,""],handle_daemon_restart:[2,1,1,""],handle_daemon_start:[2,1,1,""],handle_daemon_stop:[2,1,1,""],handle_echo:[2,1,1,""],handle_missing_args:[2,1,1,""],handle_queue_progress:[2,1,1,""],handle_re:[2,1,1,""],handle_simple_command:[2,1,1,""],wait_for_daemon:[2,1,1,""]},"qop.constants":{Command:[2,2,1,""],ConverterType:[2,2,1,""],PayloadClass:[2,2,1,""],Status:[2,2,1,""],TaskType:[2,2,1,""]},"qop.constants.Command":{DAEMON_FACTS:[2,3,1,""],DAEMON_IS_ACTIVE:[2,3,1,""],DAEMON_START:[2,3,1,""],DAEMON_STOP:[2,3,1,""],QUEUE_ACTIVE_PROCESSES:[2,3,1,""],QUEUE_FLUSH_ALL:[2,3,1,""],QUEUE_FLUSH_PENDING:[2,3,1,""],QUEUE_IS_ACTIVE:[2,3,1,""],QUEUE_MAX_PROCESSES:[2,3,1,""],QUEUE_PROGRESS:[2,3,1,""],QUEUE_PUT:[2,3,1,""],QUEUE_SHOW:[2,3,1,""],QUEUE_START:[2,3,1,""],QUEUE_STOP:[2,3,1,""]},"qop.constants.ConverterType":{COPY:[2,3,1,""],MP3:[2,3,1,""],OGG:[2,3,1,""]},"qop.constants.PayloadClass":{DAEMON_FACTS:[2,3,1,""],QUEUE_PROGRESS:[2,3,1,""],TASK:[2,3,1,""],TASK_LIST:[2,3,1,""],VALUE:[2,3,1,""]},"qop.constants.Status":{ACTIVE:[2,3,1,""],FAIL:[2,3,1,""],OK:[2,3,1,""],PENDING:[2,3,1,""],SKIP:[2,3,1,""]},"qop.constants.TaskType":{CONVERT:[2,3,1,""],CONVERT_SIMPLE:[2,3,1,""],COPY:[2,3,1,""],DELETE:[2,3,1,""],ECHO:[2,3,1,""],FAIL:[2,3,1,""],FILE:[2,3,1,""],MOVE:[2,3,1,""],SLEEP:[2,3,1,""]},"qop.converters":{Converter:[2,2,1,""],CopyConverter:[2,2,1,""],Mp3Converter:[2,2,1,""],OggConverter:[2,2,1,""]},"qop.converters.Converter":{do_remove_art:[2,4,1,""],from_dict:[2,4,1,""],from_json:[2,4,1,""],run:[2,4,1,""],to_dict:[2,4,1,""]},"qop.converters.CopyConverter":{run:[2,4,1,""],to_dict:[2,4,1,""]},"qop.converters.Mp3Converter":{do_remove_art:[2,4,1,""],run:[2,4,1,""],to_dict:[2,4,1,""]},"qop.converters.OggConverter":{run:[2,4,1,""],to_dict:[2,4,1,""]},"qop.daemon":{CommandMessage:[2,2,1,""],Message:[2,2,1,""],QopClient:[2,2,1,""],QopDaemon:[2,2,1,""],RawMessage:[2,2,1,""],StatusMessage:[2,2,1,""]},"qop.daemon.Message":{encode:[2,4,1,""]},"qop.daemon.QopClient":{active_processes:[2,4,1,""],active_tasks:[2,4,1,""],gather_facts:[2,4,1,""],get_queue_progress:[2,4,1,""],is_daemon_active:[2,4,1,""],is_queue_active:[2,4,1,""],max_processes:[2,4,1,""],send_command:[2,4,1,""]},"qop.daemon.QopDaemon":{close:[2,4,1,""],facts:[2,4,1,""],handle_request:[2,4,1,""],is_listening:[2,4,1,""],listen:[2,4,1,""],new_queue:[2,4,1,""],port:[2,3,1,""],queue:[2,3,1,""],stats:[2,3,1,""]},"qop.daemon.RawMessage":{body:[2,4,1,""],decode:[2,4,1,""],encode:[2,4,1,""],header:[2,4,1,""],header_len:[2,4,1,""]},"qop.exceptions":{AlreadyUnderEvaluationError:[2,5,1,""],FileExistsAndCannotBeComparedError:[2,5,1,""],FileExistsAndIsIdenticalError:[2,5,1,""],FileExistsAndShouldBeSkippedError:[2,5,1,""]},"qop.scanners":{Scanner:[2,2,1,""],ScannerBlacklist:[2,2,1,""],ScannerWhitelist:[2,2,1,""]},"qop.scanners.Scanner":{run:[2,4,1,""]},"qop.scanners.ScannerBlacklist":{run:[2,4,1,""]},"qop.scanners.ScannerWhitelist":{run:[2,4,1,""]},"qop.tasks":{ConvertTask:[2,2,1,""],CopyTask:[2,2,1,""],DeleteTask:[2,2,1,""],EchoTask:[2,2,1,""],FailTask:[2,2,1,""],FileTask:[2,2,1,""],MoveTask:[2,2,1,""],QueueProgress:[2,2,1,""],SimpleConvertTask:[2,2,1,""],SleepTask:[2,2,1,""],Task:[2,2,1,""],TaskQueue:[2,2,1,""],TaskQueueElement:[2,2,1,""],UnknownTaskTypeError:[2,5,1,""],hammer_commit:[2,1,1,""]},"qop.tasks.ConvertTask":{color_repr:[2,4,1,""],run:[2,4,1,""],spawn:[2,4,1,""],to_dict:[2,4,1,""]},"qop.tasks.CopyTask":{color_repr:[2,4,1,""],run:[2,4,1,""]},"qop.tasks.DeleteTask":{run:[2,4,1,""]},"qop.tasks.EchoTask":{color_repr:[2,4,1,""],run:[2,4,1,""]},"qop.tasks.FailTask":{run:[2,4,1,""]},"qop.tasks.FileTask":{run:[2,4,1,""]},"qop.tasks.MoveTask":{color_repr:[2,4,1,""],run:[2,4,1,""]},"qop.tasks.QueueProgress":{fmt_summary:[2,4,1,""],from_dict:[2,4,1,""],from_list:[2,4,1,""],to_dict:[2,4,1,""],total:[2,4,1,""]},"qop.tasks.SimpleConvertTask":{color_repr:[2,4,1,""],run:[2,4,1,""],to_dict:[2,4,1,""]},"qop.tasks.SleepTask":{color_repr:[2,4,1,""],run:[2,4,1,""]},"qop.tasks.Task":{color_repr:[2,4,1,""],from_dict:[2,4,1,""],oid:[2,3,1,""],parent_oid:[2,3,1,""],run:[2,4,1,""],to_dict:[2,4,1,""],to_json:[2,4,1,""]},"qop.tasks.TaskQueue":{active_processes:[2,4,1,""],convert_processes:[2,3,1,""],facts:[2,4,1,""],fetch:[2,4,1,""],flush:[2,4,1,""],is_active:[2,4,1,""],n_active:[2,4,1,""],n_fail:[2,4,1,""],n_ok:[2,4,1,""],n_pending:[2,4,1,""],n_skip:[2,4,1,""],n_total:[2,4,1,""],peek:[2,4,1,""],pop:[2,4,1,""],print:[2,4,1,""],progress:[2,4,1,""],put:[2,4,1,""],reset_active_tasks:[2,4,1,""],run:[2,4,1,""],set_status:[2,4,1,""],stop:[2,4,1,""],transfer_processes:[2,3,1,""]},"qop.tasks.TaskQueueElement":{priority:[2,3,1,""],status:[2,3,1,""],task:[2,3,1,""]},"qop.utils":{get_project_root:[2,1,1,""],is_daemon_active:[2,1,1,""]},qop:{cli:[2,0,0,"-"],constants:[2,0,0,"-"],converters:[2,0,0,"-"],daemon:[2,0,0,"-"],exceptions:[2,0,0,"-"],scanners:[2,0,0,"-"],tasks:[2,0,0,"-"],utils:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception"},terms:{"101":2,"102":2,"103":2,"104":2,"127":2,"192k":2,"192khz":3,"201":2,"202":2,"2020":1,"2021":[1,3],"203":2,"204":2,"205":2,"206":2,"207":2,"208":2,"209":2,"210":2,"48bit":3,"9393":2,"abstract":2,"byte":2,"class":2,"default":2,"enum":2,"float":2,"function":[2,3],"import":0,"int":2,"new":2,"public":3,"return":2,"static":2,"switch":2,"true":2,"try":2,"while":3,For:[2,3],The:2,Use:[0,2],Used:2,______________:2,________________:2,_rowid_:2,abort:3,activ:[0,2,3],active_process:2,active_task:2,add:2,added:2,advantag:3,album:[0,3],all:2,alreadi:[2,3],alreadyunderevaluationerror:2,also:3,ani:[0,2],anoth:2,api:[1,3],applic:2,appropri:2,architectur:[0,1],arg:2,art:[0,3],atom:2,audio:[2,3],audiofil:2,audiophil:3,back:1,backend:2,background:3,bar:[0,3],base:[2,3],basic:[0,3],becaus:3,bee:3,befor:3,being:2,beta:3,between:2,bitrat:2,bodi:2,bool:2,cach:2,can:3,chang:2,changelog:1,check:1,child:2,choic:3,clean:3,cleanli:2,cleanup:3,cli:[1,3],client:[2,3],clog:3,close:2,color:2,color_repr:2,color_statu:2,command:[2,3],commandmessag:2,commun:2,complet:2,con:2,concurr:3,condit:[2,3],connect:3,consist:3,constant:1,contain:2,convert:[0,1,3],convert_process:2,convert_simpl:2,convert_temp:2,convertertyp:2,converttask:2,cop:3,copi:[2,3],copyconvert:2,copytask:2,core:[0,3],count:2,cover:[0,3],creat:[2,3],current:2,daemon:[1,3],daemon_fact:2,daemon_is_act:2,daemon_start:2,daemon_stop:2,databas:[2,3],decod:2,delet:2,deletetask:2,desir:3,detail:3,dev:1,develop:1,devic:3,diagram:2,dict:2,differ:[2,3],directli:2,directori:[2,3],disconnect:3,displai:[0,3],do_remove_art:2,document:[1,3],drive:3,dst:2,dummi:2,earli:[1,3],earlier:2,easili:3,echo:2,echotask:2,empti:2,encod:2,enqueu:2,enumer:2,etc:[2,3],everi:2,exampl:[2,3],except:1,execut:[2,3],extens:2,extra_head:2,facilit:2,fact:2,fail:2,failtask:2,fals:2,familiar:3,featur:[0,1],fetch:2,file1:3,file2:3,file3:3,file4:3,file:[0,2],fileexistsandcannotbecomparederror:2,fileexistsandisidenticalerror:2,fileexistsandshouldbeskippederror:2,filetask:2,fit:3,flac:3,flush:2,fmt_summari:2,folder:2,format:3,format_respons:2,format_response_summari:2,from:[0,2,3],from_dict:2,from_json:2,from_list:2,fugu:3,gather_fact:2,gener:3,get:3,get_project_root:2,get_queue_progress:2,github:1,given:2,hammer_commit:2,handle_convert:2,handle_copy_mov:2,handle_daemon_destroi:2,handle_daemon_is_act:2,handle_daemon_restart:2,handle_daemon_start:2,handle_daemon_stop:2,handle_echo:2,handle_missing_arg:2,handle_queue_progress:2,handle_r:2,handle_request:2,handle_simple_command:2,header:2,header_len:2,helper:2,home:2,ignor:3,implement:0,includ:[2,3],include_children:2,index:1,info:2,inform:2,inlcud:3,input:3,instanti:2,intenum:2,interfac:3,intern:2,is_act:2,is_daemon_act:2,is_listen:2,is_queue_act:2,its:2,job:3,jpg:3,json:[2,3],lai:0,languag:3,larg:3,last:3,leav:3,like:3,limit:3,line:3,list:2,listen:2,lock:2,log:2,look:2,lossi:3,lossless:3,lower:2,m3player:3,make:2,manag:[2,3],mark:2,max_convert_process:2,max_process:2,max_transfer_process:2,max_tri:2,maximum:2,media:3,messag:2,mobil:3,modul:1,moment:1,monitor:3,more:3,most:0,move:[2,3],movetask:2,mp3:[2,3],mp3convert:2,mp3player:3,msg:2,much:1,multi:2,multicor:3,music:3,must:2,n_activ:2,n_fail:2,n_ok:2,n_pend:2,n_skip:2,n_total:2,need:3,new_queu:2,none:[0,2,3],now:0,number:[2,3],object:2,occur:2,ogg:2,oggconvert:2,oid:2,one:2,onli:[0,2,3],oper:2,optim:3,option:2,out:0,output:3,overview:2,page:1,parallel:2,paramet:2,paramt:3,parent:2,parent_oid:2,path:2,pathlib:2,payload:2,payload_class:2,payloadclass:2,peek:2,pend:2,persist:[2,3],persist_queu:2,plan:3,player:3,pleas:[1,3],pop:2,port:2,portabl:3,posixpath:2,possibl:2,power:3,print:2,priorit:2,prioriti:2,process:[2,3],program:3,progress:[0,1,2,3],project:2,pronounc:3,properti:2,protocol:2,prototyp:0,provid:3,put:[2,3],python:2,qop:[0,3],qopclient:2,qopd:3,qopdaemon:2,queri:2,queu:2,queue:[2,3],queue_active_process:2,queue_flush_al:2,queue_flush_pend:2,queue_is_act:2,queue_max_process:2,queue_path:2,queue_progress:2,queue_put:2,queue_show:2,queue_start:2,queue_stop:2,queueprogress:2,race:2,rais:2,raw:2,rawmessag:2,readm:1,receiv:2,refer:3,refin:3,releas:3,remov:[0,3],remove_art:2,repeat:3,repres:2,req:2,request:2,reset_active_task:2,respond:2,respons:2,resum:3,retain:3,retriev:2,root:2,rsp:2,run:2,runner:2,same:3,scanner:1,scannerblacklist:2,scannerwhitelist:2,script:3,search:1,second:2,see:2,select:2,send:[2,3],send_command:2,sent:2,separ:2,server:2,set:2,set_statu:2,should:2,simpleconverttask:2,singl:[2,3],skip:2,sleep:2,sleeptask:2,smartli:3,song:3,space:3,spawn:2,speed:3,sql:2,sqlite3:[2,3],src:2,stabl:3,stage:3,start:[2,3],stat:2,statement:2,statu:[1,2],statusmessag:2,still:3,stop:[2,3],storag:2,store:[2,3],str:2,string:3,subclass:2,submodul:1,support:[2,3],tag:3,task:[0,1,3],task_list:2,task_type_exclud:2,task_type_includ:2,taskqueu:2,taskqueueel:2,tasktyp:2,tcp:2,technolog:3,tell:3,temp:2,tempdir:2,temporari:2,them:3,thi:2,through:3,time:2,timeout:2,tmp:2,to_dict:2,to_json:2,togeth:0,tool:3,total:[2,3],transco:3,transcod:[0,2,3],transfer:[2,3],transfer_process:2,travers:2,tree:2,tupl:2,two:[2,3],type:2,under:3,union:2,unknowntasktypeerror:2,untouch:3,usag:1,usb:3,used:2,user:3,util:1,valid:2,valu:2,valueerror:2,veri:1,via:2,vorbi:2,wait:2,wait_for_daemon:2,well:2,when:2,whenev:3,where:3,which:3,whole:3,without:[0,2,3],work:[1,2],worker:2,you:3,your:3},titles:["Changelog","qop - Queued File Operations","qop package","Queued file operation"],titleterms:{"2020":0,architectur:3,changelog:0,cli:2,constant:2,convert:2,daemon:2,dev:0,develop:3,except:2,featur:3,file:[1,3],indic:1,link:1,modul:2,oper:[1,3],packag:2,qop:[1,2],queu:[1,3],scanner:2,statu:3,submodul:2,tabl:1,task:2,usag:3,util:2}})