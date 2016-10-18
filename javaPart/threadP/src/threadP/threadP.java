package threadP;
import java.util.*;
import java.text.*;

//========================================== Thread Example 1


//public class threadP {
//	public static void main(String[] args) {
//		Thread t = new MyThread(1);
//		Thread x = new MyThread(2);
//		t.start();
//		x.start();
//	}
//
//}
//
//class MyThread extends Thread {
//	private int id;
//	
//	public MyThread(int id) {
//		super();
//		this.id = id;
//	}
//	
//	public void run() {
//		for(int i = 0;i < 10;i ++) {
//			System.out.println(" " + id + ":" +  i);
//			try{
//				Thread.sleep(500);
//			}catch( InterruptedException e ) {}
//		}
//	}
//}

//========================================== Thread Example 2
/*
public class threadP {
	public static void main(String args[]) {
//		MyTask mytask = new MyTask(10);
//		Thread thread = new Thread(mytask);
//  	thread.start();
//		thread.setDaemon(true);
		
		Thread t = new MyThread(10);
		t.start();
//	    t.setDaemon(true);

		for(int i=0; i<6; i++) {	
			System.out.println("Main--" + i);
			try{
				Thread.sleep(500);
			}catch( InterruptedException e ){}
		}

	}
}

class MyThread extends Thread {
	private int n;
	public MyThread(int n){
		super();
		this.n = n;
	}
	public void run() {
		for(int i=0; i<n; i++) {	
			System.out.println(" " + i);
			try{
				Thread.sleep(500);
			}catch( InterruptedException e ){}
		}
	}
}
*/
//========================================== Thread Example 3

//public class threadP {
//	public static void main(String args[]) {
//		Counter c1 = new Counter(1);
//		Thread t1 = new Thread(c1);
//		Thread t2 = new Thread(c1);
//		Thread t3 = new Thread(c1);
//		Counter c2 = new Counter(2);
//		Thread t4 = new Thread(c2);
//		Thread t5 = new Thread(c2);
//		Thread t6 = new Thread(c2);
//		TimeDisplay timer = new TimeDisplay();
//		Thread t7 = new Thread(timer);
//		t1.start();
//		t2.start();
//		t3.start();
//		t4.start();
//		t5.start();
//		t6.start();
//		t7.start();
//	}
//}
//
//class Counter implements Runnable {
//	int id;
//	Counter(int id){
//		this.id = id;
//	}
//	public void run() {
//		int i=0;
//		while( i++<=10 ){
//			System.out.println("ID: " + id + "  No. " + i);
//			try{ Thread.sleep(10); } catch( InterruptedException e ){}
//		}
//	}
//}
//
//class TimeDisplay implements Runnable {
//	public void run(){
//		int i=0;
//		while( i++<=3 ){
//			System.out.println( 
//				new SimpleDateFormat().format( new Date()));
//			try{ Thread.sleep(40); } catch( InterruptedException e ){}
//		}
//	}
//}


//========================================== Thread Example 4
/*
public class threadP {
	public static void main(String args[]) {
		Thread t = new MyThread();
		t.setDaemon(true);
		t.start();

		System.out.println( "Main--" + new Date());
		try{ Thread.sleep(500); } 
		catch(InterruptedException ex){}
		System.out.println("Main End");
	}
}

class MyThread extends Thread {
	public void run() {
		for(int i=0; i<10; i++ ){
			System.out.println(  i + "--" + new Date());
			try{ Thread.sleep(100); } 
			catch(InterruptedException ex){}
		}
	}
}
*/
//========================================== Thread Example 5
/*
class threadP
{
	public static int cnt=0;
	public static void main(String[] args) 
	{
		final int NUM=5000;
		Thread [] threads = new Thread[NUM];
		for(int i=0; i<NUM; i++){
			threads[i] = new Thread(){
				public  void run(){ 
					cnt++;
					try{ Thread.sleep(1); } catch(InterruptedException ex){}
				}
			};
		}
		for(int i=0; i<NUM; i++) threads[i].start();

		try{ Thread.sleep(3000); } catch(InterruptedException ex){}
		System.out.printf("%d %b\n", cnt, cnt==NUM);
	}
}
*/

//========================================== Thread Example 6
/*
class threadP
{
	public static void main(String[] args){ 
		Num num = new Num();
		Thread counter1 = new Counter(num);
		Thread counter2 = new Counter(num);
		for( int i=0; i<10; i++ ){
			if(!num.testEquals()) break;
			try{							           
				Thread.sleep(100);
			}catch(InterruptedException e){
			}
		}
	}
}

class Num
{
	private int x=0;
	private int y=0;
	void increase(){ 
		x++; 
		y++; 
	}
	boolean testEquals(){
		boolean ok = (x==y);
		System.out.println( x + "," + y  + ok);
		return ok;
	}
}

class Counter extends Thread
{
	private Num num;
	Counter( Num num ){
		this.num = num;
		this.setDaemon(true);
		this.setPriority(MIN_PRIORITY);
		this.start();
	}
	public void run(){
		while(true){
			num.increase();
		}
	}
}
*/

//========================================== Thread Example 7
/*
class threadP
{
	public static void main(String[] args){ 
		Num num = new Num();
		Thread counter1 = new Counter(num);
		Thread counter2 = new Counter(num);
		for( int i=0; i<10; i++ ){
			num.testEquals();
			try{							           
				Thread.sleep(100);
			}catch(InterruptedException e){
			}
		}
	}
}

class Num
{
	private int x=0;
	private int y=0;
	synchronized void increase(){ 
		x++; 
		y++; 
	}
	synchronized boolean testEquals(){
		boolean ok = (x==y);
		System.out.println( x + "," + y +" ��" + ok);
		return ok;
	}
}

class Counter extends Thread
{
	private Num num;
	Counter( Num num ){
		this.num = num;
		this.setDaemon(true);
		this.setPriority(MIN_PRIORITY);
		this.start();
	}
	public void run(){
		while(true){
			num.increase();
		}
	}
}
*/

//========================================== Thread Example 8
// class Producer extends Thread {
// 	private CubbyHole cubbyhole;
// 	private int number;

// 	public Producer(CubbyHole c, int number) {
// 		cubbyhole = c;
// 		this.number = number;
// 	}

// 	public void run() {
// 		for (int i = 0; i <10; i++) {
// 			cubbyhole.put(i);
// 			//System.out.println("Producer #" + this.number + " put: " + i);
// 			//try {
// 			//	sleep((int)(Math.random() * 100));
// 			//} catch (InterruptedException e) {
// 			//}
// 		}
// 	}
// }

// class Consumer extends Thread {
// 	private CubbyHole cubbyhole;
// 	private int number;

// 	public Consumer(CubbyHole c, int number) {
// 		cubbyhole = c;
// 		this.number = number;
// 	}

// 	public void run() {
// 		int value = 0;
// 		for (int i = 0; i <10; i++) {
// 			value = cubbyhole.get();
// 			//System.out.println("Consumer #" + this.number + " got: " + value);
// 		}
// 	}
// }

// class CubbyHole1
// {
// 	private int seq;
// 	public synchronized int get() {
// 		return seq;
// 	}
// 	public synchronized void put(int value) {
// 		seq = value;
// 	}
// }

// class CubbyHole2
// {
// 	private int seq;
// 	private boolean available = false;

// 	public synchronized int get() {
// 		while (available == false) ; //dead locked !!!
// 		return seq;
// 	}
// 	public synchronized void put(int value) {
// 		while (available == true) ;
// 		seq = value;
// 		available = true;
// 	}
// }

// class CubbyHole3 {
// 	private int seq;
// 	private boolean available = false;

// 	public synchronized int get() {
// 		while (available == false) {
// 			try {
// 				wait(); // waits for notify() call from Producer
// 			} catch (InterruptedException e) {
// 			}
// 		}
// 		available = false;
// 		notify();
// 		return seq;
// 	}

// 	public synchronized void put(int value) {
// 		while (available == true) {
// 			try {
// 				wait(); // waits for notify() call from consumer
// 			} catch (InterruptedException e) {
// 			}
// 		}
// 		seq = value;
// 		available = true;
// 		notify();
// 	}
// }


// class CubbyHole {
// 	private int data[] = new int[3];
// 	private int index = 0;

// 	public synchronized int get() {
// 		while (index <= 0) {
// 			try {
// 				wait(); // waits for notify() call from Producer
// 			} catch (InterruptedException e) {
// 			}
// 		}
// 		index --;
// 		int value = data[index];
// 		System.out.println("Consumer " +  " got: " + data[index]);
// 		notify();
// 		return value;
// 	}

// 	public synchronized void put(int value) {
// 		while (index >= data.length) {
// 			try {
// 				wait(); // waits for notify() call from consumer
// 			} catch (InterruptedException e) {
// 			}
// 		}
// 		System.out.println("Producer " + " put: " + value);
// 		data[index] = value;
// 		index ++;
// 		notify();
// 	}
// }

// class threadP {
//	public static void main(String args[]) {
//		CubbyHole c = new CubbyHole();
//		Producer p1 = new Producer(c, 1);
//		Consumer c1 = new Consumer(c, 1);
//		p1.start();
//		c1.start();
//	} 
//}





