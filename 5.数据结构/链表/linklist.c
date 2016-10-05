#include <stdio.h>
#include <malloc.h>
#define LEN  sizeof(struct stu)

struct stu
{
	int num;
	float score;
	struct stu *next;
};

struct stu *creat()
{
	struct stu *head;//头结点
	struct stu *p;  //用于指向新生成的结点
	struct stu *tail;//用于指向链表的最后一个结点
	int x;
	tail = head = NULL;
	scanf("%d",&x);
	while(x!=0){
		p= (struct stu *)malloc(LEN);
		p->num=x;
		if(head== NULL) head= p;
		scanf("%f",&p->score);
		if(tail!= NULL) tail->next=p;//链表不为空时，p所指的新结点需插入链表尾
		tail= p;
		scanf("%d",&x);
	}
	if(tail != NULL) tail->next= NULL;  //创建的链表非空时，最后一个结点的指针域要为NULL
	return (head);
};

/**
 *顺序访问链表中的结点
*/

void list(struct stu *head){
	struct stu *p;
	p=head;
	if(head != NULL){
		printf(" The list records are: \n");
		do{
			printf("%d\t%5.1f\n",p->num,p->score );
			p = p->next;
		}while(p != NULL);
	}else{
		printf("The list is null");
	}
}

 main(){
 	struct stc *head;
 	head=creat();
 	list(head);
 	// 等待输入，退出，用于显示结果
	getch();
	exit(1);
 }