import sys
#Declaração de variáveis
v1  = 0
v2  = 0
opt = 0
#Declaração dos métodos (funções)
def sum (a,b): return a+b
def sub (a,b): return a-b
def mult(a,b): return a*b
def div (a,b): return 0 if b==0 else int(a/b)
def rest(a,b): return 0 if b==0 else a%b
#Atribuição de v1 e v2.
try:
  v1 = float(sys.argv[1])
  v2 = float(sys.argv[2])
except:
  sys.stdout.write("Erro no argumento 1 ou 2.\n")
  exit()
#Atribuição de opt.
try:    opt = sys.argv[3]
except: opt = "-todas"
#Exibição dos resultados
if opt=="-todas" or opt=="-soma":
  sys.stdout.write( "\nSoma: "         +str(sum (v1,v2)) )
if opt=="-todas" or opt=="-sub":
  sys.stdout.write( "\nSubtração: "    +str(sub (v1,v2)) )
if opt=="-todas" or opt=="-mult":
  sys.stdout.write( "\nMultiplicação: "+str(mult(v1,v2)) )
if opt=="-todas" or opt=="-div":
  sys.stdout.write( "\nDivisão: "      +str(div (v1,v2)) )
  sys.stdout.write( "\nResto: "        +str(rest(v1,v2)) )
#Fim
sys.stdout.write( "\n" )


Exercicio 6 a.
import sys
import array

arr = array.array('i',[0,1,2,3,4,5,6,7,8,9])

def slen():
	pos=0
	try:
		while True:
			arr[pos]
			pos= pos+1
	except:
		sys.stdout.write(str(pos))

slen()