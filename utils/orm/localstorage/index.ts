// const { v4: uuidv4 } = require('uuid');
// const getId = () => uuidv4()
// const defineModel = function({ name, fields } = {}) {
//     return new MetaModel(name, fields)
// }
export {};
interface MTweet {
  id: number;
  poster: string;
  content: string;
  timestamp: number;
  likes: number;
}
type WithPK<M> = M extends { _id: number } ? never : M & { _id: number };
class TweetRecord {
  fields: (keyof MTweet)[] = ["id", "poster", "content", "timestamp", "likes"];
  id: number;
  poster: string;
  content: string;
  timestamp: number;
  likes: number;
  constructor({ id, poster, content, timestamp, likes }: MTweet) {
    this.id = id;
    this.poster = poster;
    this.content = content;
    this.timestamp = timestamp;
    this.likes = likes;
  }
  delete() {}
  save() {}
}
class TweetTable {
  _tableName: string = "tweets";
  conn: Storage = localStorage;
  _connect() {
    //TODO check conn validity
    //load from conn(localStorage)
    const store = this.conn.getItem(this._tableName);
    if (store != null) {
      //TODO check types
      return this._parse(store) as WithPK<MTweet>[];
    }
    return this.conn;
  }
  _sync() {
    //saving
  }
  _parse(sourceData: string) {
    return JSON.parse(sourceData);
  }
  find(pk: number) {}
  where(filter: Function) {}
  delete() {}
  create(tweet: MTweet) {}
  update(tweet: Partial<MTweet>) {}
}
function testRecord() {
  const TWEET1_DATA: MTweet = {
    id: 1,
    poster: "kyloc",
    content: "hello world",
    timestamp: Date.now(),
    likes: 112,
  };
  const tweet1 = new TweetRecord(TWEET1_DATA);
}
function testTable() {}

// class MetaModel<ModelType> {
//   name: string;
//   fields: any[];
//   constructor(name: string, fields: any[]) {
//     this.name = name;
//     this.fields = fields;
//   }
// }

// class MetaModel1 {
//   constructor(name, fields) {
//     this.name = name;
//     this.fields = fields;
//   }
//   model({ id = null, ...values } = {}) {
//     return new Proxy(new Model(id, this.fields, values), {
//       get: function (target, propName) {
//         console.log("Proxy trap get:", target, propName);
//         if (target._fields.indexOf(propName) > -1)
//           return target._values[propName];
//         else return target[propName];
//       },
//       set: function (target, propName, propValue) {
//         console.log("Proxy trap set:", target, propName, propValue);
//         if (target._fields.indexOf(propName) > -1) {
//           target._values[propName] = propValue;
//           return true;
//         } else return false;
//       },
//     });
//   }
//   find() {}
//   delete() {}
//   create() {}
//   update() {}
// }
// class Model {
//     constructor(id, fields, values) {
//         if (!Array.isArray(fields) || fields.length === 0) throw Error("Undefined Model: Fields required!")
//         this._fields = fields
//         this._values = values == null ? {} : values
//         this._id = id == null ? null : id
//         this.isNew = id == null ? true : false
//     }
//     get id() {
//         return this._id
//     }
//     save() {
//         console.log("Function save")
//     }
// }
// module.exports = defineModel

// function test() {
//     const Product = defineModel({ name: "Product", fields: ["name", "price"] })
//     const p = Product.model({ name: "Tactic", price: 20 })
//     console.log(p.name)
//     console.log(p.price)
//     console.log(p.id)
//     console.log(p.name = "apple")
//     console.log(p.price = 50)
//     p.save()
// }
// test()
