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
	struct stu *head;//ͷ���
	struct stu *p;  //����ָ�������ɵĽ��
	struct stu *tail;//����ָ����������һ�����
	int x;
	tail = head = NULL;
	scanf("%d",&x);
	while(x!=0){
		p= (struct stu *)malloc(LEN);
		p->num=x;
		if(head== NULL) head= p;
		scanf("%f",&p->score);
		if(tail!= NULL) tail->next=p;//����Ϊ��ʱ��p��ָ���½�����������β
		tail= p;
		scanf("%d",&x);
	}
	if(tail != NULL) tail->next= NULL;  //����������ǿ�ʱ�����һ������ָ����ҪΪNULL
	return (head);
};

/**
 *˳����������еĽ��
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
 	// �ȴ����룬�˳���������ʾ���
	getch();
	exit(1);
 }