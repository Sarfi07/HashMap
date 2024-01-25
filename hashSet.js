class hashSet {
    capacity;
    loadFactor;
    size;
    buckets;

    constructor() {
        this.capacity = 4;
        this.size = 0;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.capacity);
    }

    hash(value) {
        let hashCode = 0;
        let primeFactor = 31;

        for (let i = 0; i < value.length; i++) {
            hashCode = primeFactor * hashCode + value.charCodeAt(i);
        }
        return hashCode;
    }

    // set
    set(key) {
        let index = this.hash(key) % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        // if key already present then overwrite the value else add new Node;s
        
        if (!this.buckets[index]) {
            this.buckets[index] = key;
        } else {
            this.buckets[index] = key;
        }

        // grow the buckets if needed
        if (this.size >= this.loadFactor * this.capacity) {
            // double the buckets and copy all the existing values to new buckets

            let newCapacity = 2 * this.capacity;
            let newBuckets = new Array(newCapacity);
            let newSize = 0;

            for (let i = 0; i < this.buckets.length; i++) {
                if (this.buckets[i]) {
                    let index = this.hash(this.buckets[i].key) % newCapacity; // 
                    newBuckets[index] = this.buckets[i];
                    newSize++
                }
            }
            
            this.buckets = newBuckets;
            this.capacity = newCapacity;
            this.size = newSize;
        }
        

    }
    

    // get
    get(key) {
        let index = this.hash(key) % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        if (this.buckets[index]) {
            return this.buckets[index];
        } else {
            return null
        }
    }

    // has
    has(key) {
        if (this.buckets[this.hash(key) % this.capacity]) {
            return true;
        } else return false;
    }

    // remove
    remove(key)  {
        let index = this.hash(key) % this.capacity;

        if (this.buckets[index])  {
            this.buckets[index] = null;
            this.size--;
            return true;
        } else return false;
    }

    // length
    length() {
        return this.size;
    }

    // clear 
    clear() {
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = null;
        }

        return true;;
    }

    // keys
    keys() {
        let keysArr = [];

        this.buckets.forEach(element => {
            if (element) {
                keysArr.push(element.key);
            }
        })

        return keysArr;
    }

    // entries
    entries() {
        let list = [];

        this.buckets.forEach(element => {
            if (element) {
                list.push(element);
            }
        })

        return list;
    }

    printH() {
        return this.buckets;
    }

}


export default hashSet;