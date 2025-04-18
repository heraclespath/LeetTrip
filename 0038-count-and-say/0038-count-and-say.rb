# @param {Integer} n
# @return {String}
def count_and_say(n)
    s = '1'
    (n - 1).times do
      i = 0
      t = []
      while i < s.length
        j = i
        j += 1 while j < s.length && s[j] == s[i]
        t << (j - i).to_s
        t << s[i]
        i = j
      end
      s = t.join
    end
    s
  end